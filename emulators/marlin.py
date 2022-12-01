# this is a micropython script (an alternative would be circuitpython - both dialects have pros and cons)
# every thing should be os agnostic i.e. should work under linus, macos, windows

# grab micropython at https://micropython.org/ an drop uf2-file onto raspberry pico (e.g firmware installation)
# - https://micropython.org/download/rp2-pico/
# - drop rp2-pico-20220618-v1.19.1.uf2 onto RPI-RP2 drive
# - download thonny (https://thonny.org/, there is also a portable version i.e. thonny-4.0.1-windows-portable.zip
#   - choose "standard" not "rasperry pi" at first start

# todos:
# - not sure how to chance baudrate of serial-over-usb device
# - even not sure if baud rate concept is applicable for serial-over-usb
# - circuit can provide two serial-over-usb connections called console and data
#   - https://learn.adafruit.com/customizing-usb-devices-in-circuitpython/circuitpy-midi-serial#usb-serial-console-repl-and-data-3096590-12

import time

print("Marlin Emulator 1.0.0")

time.sleep_ms(500)

print("ok")

x = 0.0
y = 0.0
z = 0.0
e = 0.0

absolute = True

while True:
    
    
    result = input()
    result = "'" + result +"'"
    time.sleep_ms(100)
    print(result)



# 115200
# 250000