import urllib as ul
import math
import time
import random as rd
import requests as rq
def Hello_World (a):
    print(a)
def get_channels(*values):
    channels = []
    for channel in values:
        channels.append(channel)
    return channels
if __name__ == "__main__":
    tags = input("The channels you want: \n").split()
    cha = []
    for tag in tags:
        print(tag)
        cha.append(int(tag))
    #for tag in tags:
     #   print("Are you sure? " + tag + " ")
   # tags.append(map(int,input("The channels you want: \n").split()))
    print(cha)
