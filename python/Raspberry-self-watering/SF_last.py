#use channels: 11,13,37 for output & 12 for input
import RPi.GPIO as rp
import time
from subprocess import call
def start():
    rp.setmode(rp.BOARD)
#define a function to set the boarb mode (must!)
def init_out(a):
    for x in a:
        rp.setup(x,rp.OUT)
        pass
#define a fuction to set some channels out (must!)
def init_in(a):
    for x in a:
        rp.setup(x,rp.IN)
        pass
#define a fuction to set other channels in (must!)
def watering_on():
    rp.output(13,rp.LOW)
    rp.output(37,rp.HIGH)
    rp.output(40,rp.HIGH)
#define a fuction to turn on the watering proccess
def watering_off():
    rp.output(37,rp.LOW)
    rp.output(40,rp.LOW)
#define a fuction to turn off the watering proccess
def take_picture_write_logfile():
    a = time.strftime('%Y-%m-%d-%H:%M:%S',time.localtime(time.time()))
    call(['raspistill -o YourFlower'+ a +'.png -q 100 -e png -n'],shell = True)
    msg = "echo '" + a + "   Watering proccess has been complete successfully!' >> message.log"
    call([msg],shell = True)
#define a fuction to take a photo and save
def clean():
    rp.cleanup()
#clean the channels used
if __name__ == '__main__':
#ues:0 /12 * * * python3 SF_last.py => control each 12 hours open thois file
    rp.setwarnings(False)
#no warnings
    clean()
#clean first
    start()
#set mode
    Cin = [12]
    Cout = [13,37,40]
    init_out(Cout)
    init_in(Cin)
#set channels in & out
    active = True
    count = 0
    while active:
        i = rp.input(12)
        if i == 1:
            if count == 0:
                watering_on()
                print('The watering proccess is running at the moment!')
                count +=1
                continue
            if count != 0:
                continue
#return the message 'dry' to turn on the watering proccess until return the message 'wet'
        if i == 0:
            watering_off()
            print('Proccess has been completed!\nGetting picture...\nWriting into logfile...')
            take_picture_write_logfile()
            print('Done!')
#take a photo and write the log file
            active = False
    clean()