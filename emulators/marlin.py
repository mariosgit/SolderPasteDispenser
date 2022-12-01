# this is a micropython script (an alternative would be circuitpython - both dialects have pros and cons)
# every thing should be os agnostic i.e. should work under linus, macos, windows

# grab micropython at https://micropython.org/ an drop uf2-file onto raspberry pico (e.g firmware installation)
# - https://micropython.org/download/rp2-pico/
# - drop rp2-pico-20220618-v1.19.1.uf2 onto RPI-RP2 drive
# - download thonny (https://thonny.org/, there is also a portable version i.e. thonny-4.0.1-windows-portable.zip
#   - choose "standard" not "rasperry pi" at first start

# todos:
# - not sure how to chance baudrate of serial-over-usb device
# - even not sure if baud rate concept is applicable for serial-over-usb, seems to be applicable and might be changeable within firmware code
#   - micropython uses 9600 baud
#   - circuitpython uses 115200 baudjj
# - circuitpython can provide two serial-over-usb connections called console and data
#   - https://learn.adafruit.com/customizing-usb-devices-in-circuitpython/circuitpy-midi-serial#usb-serial-console-repl-and-data-3096590-12

# questions:
# - feature: disconnect serial port
# - feature: change baudrate (perhaps hidden just for debugging/testing purposes)
# - how is online version deployed, is in sync with latested commit, is deployment triggered

import uselect
from sys import stdin
import time
import re

# how serial lines are ended
TERMINATOR = "\n"

buffered_input = []
input_line_this_tick = ""

def read_serial_input():
    """
    Buffers serial input.
    Writes it to input_line_this_tick when we have a full line.
    Clears input_line_this_tick otherwise.
    """
    global buffered_input
    global input_line_this_tick
    # stdin.read() is blocking which means we hang here if we use it. Instead use select to tell us if there's anything available
    # note: select() is deprecated. Replace with Poll() to follow best practises
    select_result = uselect.select([stdin], [], [], 0)
    while select_result[0]:
        # there's no easy micropython way to get all the bytes.
        # instead get the minimum there could be and keep checking with select and a while loop
        input_character = stdin.read(1)
        # add to the buffer
        buffered_input.append(input_character)
        # check if there's any input remaining to buffer
        select_result = uselect.select([stdin], [], [], 0)
    # if a full line has been submitted
    if TERMINATOR in buffered_input:
        line_ending_index = buffered_input.index(TERMINATOR)
        # make it available
        input_line_this_tick = "".join(buffered_input[:line_ending_index])
        # remove it from the buffer.
        # If there's remaining data, leave that part. This removes the earliest line so should allow multiple lines buffered in a tick to work.
        # however if there are multiple lines each tick, the buffer will continue to grow.
        if line_ending_index < len(buffered_input):
            buffered_input = buffered_input[line_ending_index + 1 :]
        else:
            buffered_input = []
    # otherwise clear the last full line so subsequent ticks can infer the same input is new input (not cached)
    else:
            input_line_this_tick = ""

x = 0.0
y = 0.0
z = 0.0
e = 0.0
absolute = True

while True:
    read_serial_input()
    result = "ok"
    if input_line_this_tick:
        if input_line_this_tick.startswith("M114"):
            result = f"X:{x} Y:{y} Z:{z} E:{e}  Count X:0 Y:0 Z:0" 
        elif input_line_this_tick.startswith("G90"): # absolute
            absolute = True
        elif input_line_this_tick.startswith("G91"): # relative
            absolute = False
        elif input_line_this_tick.startswith("G28"): # home
            x = 0.0; y = 0.0; z = 0.0
        elif input_line_this_tick.startswith("G0 "): # move
            #G01 X247.951560 Y11.817060 Z-1.000000
            """
            >>> a = re.compile("^G0( [XYZ]\d+\.?\d*)?( [XYZ]\d+\.?\d*)?( [XYZ]\d+\.?\d*)?$")
            >>> m =a.match("G0 X233 Z22222. Y23.22")
            >>> m.groups()
            (' X233', ' Z22222.', ' Y23.22')
            """
            print("'"+input_line_this_tick.strip()+"'")
            regex = re.compile("^G0( [XYZ]\d+\.?\d*)?( [XYZ]\d+\.?\d*)?( [XYZ]\d+\.?\d*)?$")
            match = regex.match(input_line_this_tick.strip())
            print(match)
            print(type(match))
            #print(len(match))
            print("'"+input_line_this_tick.strip()+"'")
            xp = 0
            yp = 0
            zp = 0
            for m in match.groups():
                if m is None:
                    continue
                if m.startswith(" X"):
                    xp = float(m[2:])
                if m.startswith(" Y"):
                    yp = float(m[2:])
                if m.startswith(" Z"):
                    zp = float(m[2:])
            if absolute:
                x = xp; y = yp; z = zp
            else:
                x = x + xp; y = yp; z = zp
        else:
            result = "ok: " + input_line_this_tick
        print(result)
    time.sleep_ms(500)
    
