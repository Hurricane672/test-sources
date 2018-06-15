#coding=utf-8
import time
import re
import PyQt5
import whois
import requests
import urllib3
import sys
import os
import queue
import threading
import urllib
from bs4 import BeautifulSoup as ba

def getInfo():
    path = os.path.split(os.path.realpath(__file__))[0]
    urlPath = path+"\\urls.txt"
    searchPath = path+"\\search.txt"
    # http://www.baidu.com/s?wd=example&pn=x
    with open(urlPath) as u:
        urls = u.read().splitlines()
    with open(searchPath,"r+",encoding="utf-8") as s:
        searchs = s.read().splitlines()
    print("\nURLs:")
    for i in urls:
        print("  [+] %s"%i)
    print("\nKeyWords: ")
    for i in searchs:
        print("  [+] %s"%i)
    return(urls,searchs,path)

def getUrls(url):
    s=urllib.request.urlopen(url).read()
    ss=s.replace(" ","")
    urls=re.findall(r"<a.*?href=.*?<\/a>",ss,re.I)
    for i in urls:
        print (i)
    else:
        print ("[-]Over")

def getPages(urls):
    #for i in urls:
    i = "http://www.baidu.com/s?wd=" + "人际交往密切程度有多高"
    r = requests.get(i)
    return getUrls(i)

def main():
    while (True):
        print("Collecting informations...")
        (urls,searchs,path) = getInfo()
        x = input("Get again?(y/n)")
        if x == "y":
            continue
        if x == "n":
            break
        else:
            continue
    getPages(urls)
if __name__ == '__main__':
    main()
#for url in urls:
#    r = requests.get(url)
#    print(r.status_code,r.content)