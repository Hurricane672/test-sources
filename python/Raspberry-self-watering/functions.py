#coding=utf-8
import RPi.GPIO as rp
import string
import time
import smtplib
from subprocess import call
def get_channels():
    channels = []
    tags = input('Channels you want(between 1 and 40): ').split()
    for value in tags:
        j = int(value)
        if j <= 40:
            if j >= 1:
                channels.append(j)
                print('Pin number: '+ str(j) +' got!')
                time.sleep(0.2)
            else:
                print('Pin number: '+ str(j) +' is not in 1~40')
                time.sleep(0.2)
                continue
        else:
            print('Pin number: '+ str(j) +' is not in 1~40!')
            time.sleep(0.2)
            continue
    f = [str(g) for g in channels]
    s = ' '.join(f)
    print('Got pin number(s): '+s+ '!' )
    input('Press any key to continue!')
    return channels

def init_out(a):
    rp.setmode(rp.BOARD)
    for x in a:
        rp.setup(x,rp.OUT)
        pass

def callback(i):
    if rp.input(i):
        print('Your soil is kind of dry!')
    else:
        print('Your soil is kind of wet!')

def on (i):
    rp.output(tag[i],rp.HIGH)

def off (i):
    rp.output(tag[i],rp.LOW)

def ctrl(data):
    for i in channels:
        rp.output(i,data & 0x1)
        data = data >> 1
    pass

def test():
    for i in xrange(512):
        ctrl(i)
        time.sleep(0.1)

def clean():
    rp.cleanup()

#def send_msg (str):
#    HOST='smtp-mail.outlook.com'
#    SUBJECT = 'Logs'
#    TO = 'lujunrui@outlook.com'
#    FROM = 'lujunrui@outlook.com'
#    text = str
#    BODY = string.join(('From: %s' %FROM,'To: %s'%TO,'Subject: %s'%SUBJECT,'',text),'\r\n')
#    s = smtplib.SMTP('smtp-mail.outlook.com',587)
#    s.set_debuglevel(1)
#    s.ehlo()
#    s.starttls()
#    s.login('lujunrui@outlook.com','ljr020221')
#    s.sendmail(FROM,[TO],BODY)
#    s.quit()
#rp.add_event_detect(channel,rp.BOTH,bouncetime=200)
#rp.add_event_callback(channel,callback)