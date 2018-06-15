#-*- coding:utf-8 -*-
import time
import PyQt5
import whois
import requests
import urllib3
import sys
import os
import queue
import threading
from bs4 import BeautifulSoup as ba
def main():

    path = os.path.split(os.path.realpath(__file__))[0]
    urlPath = path+"\\urls.txt"
    searchPath = path+"\\search.txt"
    # http://www.baidu.com/s?wd=example&pn=x
    with open(urlPath) as u:
        urls = u.read().splitlines()
    with open(searchPath,"r+",encoding="utf-8") as s:
        searchs = s.read().splitlines()
    print(urls)
    print(searchs)

if __name__ == '__main__':
    main()
#for url in urls:
#    r = requests.get(url)
#    print(r.status_code,r.content)