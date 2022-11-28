// An arduino sketch to run on some arduino, eases the development a bit...
//  Not a complete emulation !

/* .gitmodules
[submodule "lib/elapsedMillis"]
        path = lib/elapsedMillis
        url = https://github.com/pfeerick/elapsedMillis.git
*/

/* platform.ini
; https://docs.platformio.org/page/projectconf.html
[platformio]
default_envs = arduinoMega
[env:arduinoMega]
platform = atmelavr
board = ATmega1280
framework = arduino
upload_speed = 57600
monitor_speed = 250000
*/


#include <Arduino.h>

void setup()
{
    // put your setup code here, to run once:
    // Serial.begin(115200);
    Serial.begin(250000);
    Serial.println("Marlin Emulator 1.0.0");
    delay(500);
    Serial.println("ok");
}

float x = 0.0;
float y = 0.0;
float z = 0.0;
float e = 0.0;
bool absolute = true;

void loop()
{
    String result = "ok";
    // put your main code here, to run repeatedly:
    if (Serial.available())
    {
        String str = Serial.readStringUntil('\n');

        if (str.startsWith("M114")) // get position
        {
            result = "X:";
            result += x;
            result += " Y:";
            result += y;
            result += " Z:";
            result += z;
            result += " E:";
            result += e;
            result += " Count X:0 Y:0 Z:0";
        }
        else if (str.startsWith("G90")) // absolute
        {
            absolute = true;
        }
        else if (str.startsWith("G91")) // relative
        {
            absolute = false;
        }
        else if (str.startsWith("G28")) // home
        {
            x = y = z = 0.0f;
        }
        else if (str.startsWith("G0 ")) // move
        {
            // puuuhhhh
            {
                int posX = str.indexOf(" X");
                if (posX > 0)
                {
                    int posXe = str.indexOf(' ', posX + 2);
                    float newX = str.substring(posX + 2, posXe).toFloat();
                    x = (absolute) ? newX : x + newX;
                }
            }
            {
                int posY = str.indexOf(" Y");
                if (posY > 0)
                {
                    int posYe = str.indexOf(' ', posY + 2);
                    float newY = str.substring(posY + 2, posYe).toFloat();
                    y = (absolute) ? newY : y + newY;
                }
            }
            {
                int posZ = str.indexOf(" Z");
                if (posZ > 0)
                {
                    int posZe = str.indexOf(' ', posZ + 2);
                    float newZ = str.substring(posZ + 2, posZe).toFloat();
                    z = (absolute) ? newZ : z + newZ;
                }
            }
            {
                int posE = str.indexOf(" E");
                if (posE > 0)
                {
                    int posEe = str.indexOf(' ', posE + 2);
                    float newE = str.substring(posE + 2, posEe).toFloat();
                    e = (absolute) ? newE : e + newE;
                }
            }
            result = "ok : ";
            result += x;
            result += ";";
            result += y;
            result += ";";
            result += z;
            result += ";";
            result += e;
        }
        else
        {
            result = String("ok : ") + str;
        }

        delay(100);
        Serial.println(result);
    }
    else
    {
    }

}
