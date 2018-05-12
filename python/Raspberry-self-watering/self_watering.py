#coding=utf-8
import time
import functions as f
import RPi.GPIO as rp
i = f.get_channels()
#try:
#    f.clean()
#except RuntimeWarning:
#    print('NO SETUP!')
#    pass
#else:
#    channels = [29,31]
f.init_out(i)
#    c = 0
#    while c < 20:
#        rp.output(channels[0],rp.HIGH)
#        rp.output(channels[1],rp.HIGH)
#        time.sleep(0.1)
#        rp.output(channels[0],rp.LOW)
#        rp.output(channels[1],rp.LOW)
#        time.sleep(0.1)
#        c += 1
#for a in i:
c = 0
while c < 20:
    rp.output(i,rp.HIGH)
    time.sleep(0.1)
    rp.output(i,rp.LOW)
    time.sleep(0.1)
    c+=1
f.clean()
