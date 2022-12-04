#include <SPI.h>
#include <U8g2lib.h>

#define OLED_MOSI   PA7 // ref
#define OLED_CLK    PA5 // ref
#define OLED_CS     PA4
#define OLED_DC     PA3
#define OLED_RESET  PA2

#define pinLED PC13


U8G2_SH1106_128X64_WINSTAR_F_4W_HW_SPI u8g2(U8G2_R2, /* cs=*/ OLED_CS, /* dc=*/ OLED_DC, /* reset=*/ OLED_RESET);

void u8g2_prepare(void) {
  u8g2.setFont(u8g2_font_6x10_tf);
  u8g2.setFontRefHeightExtendedText();
  u8g2.setDrawColor(1);
  u8g2.setFontPosTop();
  u8g2.setFontDirection(0);
}

void u8g2_string(uint8_t a) {
  u8g2.setFontDirection(0);
  u8g2.drawStr(30 + a, 31, " 0");
  u8g2.setFontDirection(1);
  u8g2.drawStr(30, 31 + a, " 90");
  u8g2.setFontDirection(2);
  u8g2.drawStr(30 - a, 31, " 180");
  u8g2.setFontDirection(3);
  u8g2.drawStr(30, 31 - a, " 270");
}

void u8g2_line(uint8_t a) {
  u8g2.drawStr( 0, 0, "drawLine");
  u8g2.drawLine(7 + a, 10, 40, 55);
  u8g2.drawLine(7 + a * 2, 10, 60, 55);
  u8g2.drawLine(7 + a * 3, 10, 80, 55);
  u8g2.drawLine(7 + a * 4, 10, 100, 55);
}

void u8g2_triangle(uint8_t a) {
  uint16_t offset = a;
  u8g2.drawStr( 0, 0, "drawTriangle");
  u8g2.drawTriangle(14, 7, 45, 30, 10, 40);
  u8g2.drawTriangle(14 + offset, 7 - offset, 45 + offset, 30 - offset, 57 + offset, 10 - offset);
  u8g2.drawTriangle(57 + offset * 2, 10, 45 + offset * 2, 30, 86 + offset * 2, 53);
  u8g2.drawTriangle(10 + offset, 40 + offset, 45 + offset, 30 + offset, 86 + offset, 53 + offset);
}

void u8g2_ascii_1() {
  char s[2] = " ";
  uint8_t x, y;
  u8g2.drawStr( 0, 0, "ASCII page 1");
  for ( y = 0; y < 6; y++ ) {
    for ( x = 0; x < 16; x++ ) {
      s[0] = y * 16 + x + 32;
      u8g2.drawStr(x * 7, y * 10 + 10, s);
    }
  }
}

uint8_t draw_state = 0;

void draw(void) {
  u8g2_prepare();
  switch (draw_state >> 4) {
    //    case 0: u8g2_box_frame(draw_state&7); break;
    //    case 1: u8g2_disc_circle(draw_state&7); break;
    //    case 2: u8g2_r_frame(draw_state&7); break;
    case 0: u8g2_string(draw_state & 0xF); break;
    case 1: u8g2_line(draw_state & 0xF); break;
    case 2: u8g2_triangle(draw_state & 0xF); break;
    case 3: u8g2_ascii_1(); break;
      //    case 7: u8g2_ascii_2(); break;
      //    case 8: u8g2_extra_page(draw_state&7); break;
      //    case 9: u8g2_bitmap_modes(0); break;
      //    case 10: u8g2_bitmap_modes(1); break;
      //    case 11: u8g2_bitmap_overlay(draw_state&7); break;
  }
}

void setup()
{
  // initialize digital pin PB1 as an output.
  pinMode(pinLED, OUTPUT);
  Serial.begin(115200);
  Serial.setTimeout(1000);
  u8g2.begin();
  u8g2.setContrast(10);
}

int loopmode = 0; //demo
int linenr = 0;
void loop()
{
  digitalWrite(pinLED, HIGH);   // turn the LED on (HIGH is the voltage level)
  //  Serial.println("Moin");

  if (Serial.available())
  {
    if (loopmode == 0)
      u8g2.clearBuffer();

    loopmode = 1; //demo aus

    // also es kommt entweder status anfrage "?" ohne return oder
    // irgendein kommando mit return

    char what = Serial.peek();
    if (what == -1)
    {
      // nix da, kann aber nich weil avail...
    }
    else if (what == '?')
    {
      Serial.read();
      Serial.print("<Idle,blaaa10.110000,9.99,11.12,blubb13.140000,14.15,15.16,irgnwas\r");
    }
    else
    {
      String teststr = Serial.readStringUntil('\r');  //read until timeout
      Serial.print("okok\r"); // Dispenser.exe will das so !!!
      //    Serial.println(teststr);

      if (teststr.startsWith("?"))
      {
        // da will einer den status mit 40 zeichen
      }
      else if (teststr.startsWith("@clr"))
      {
        u8g2.clearBuffer();
        linenr = 0;
      }
      else if (teststr.startsWith("@demo"))
      {
        u8g2.clearBuffer();
        linenr = 0;
        loopmode = 0;
      }
      else
      {
        u8g2.setFontDirection(0);
        u8g2.setDrawColor(0);
        u8g2.drawRBox(0, linenr * 8, 128, 8, 1);
        u8g2.setDrawColor(1);
        u8g2.drawStr(0, linenr * 8, teststr.c_str());
        linenr = (linenr + 1) % 8;
      }
      u8g2.sendBuffer();
    }

  }

  if (loopmode == 0)
  {
    u8g2.clearBuffer();
    draw();
    u8g2.sendBuffer();

    // increase the state
    draw_state++;
    if ( draw_state >= 4 * 16 ) // 12*8
      draw_state = 0;

    // deley between each page
    digitalWrite(pinLED, LOW);    // turn the LED off by making the voltage LOW
    delay(100);
  }
}
