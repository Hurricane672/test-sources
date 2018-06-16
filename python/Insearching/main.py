# coding=utf-8
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
import string
from bs4 import BeautifulSoup as bs
from urllib.parse import quote

def getInfo():
    path = os.path.split(os.path.realpath(__file__))[0]
    urlPath = path+"\\urls.txt"
    searchPath = path+"\\search.txt"
    with open(urlPath) as u:
        urls = u.read().splitlines()
    with open(searchPath, "r+", encoding="utf-8") as s:
        searchs = s.read().splitlines()
    print("\nURLs:")
    for i in urls:
        print("  [+] %s" % i)
    print("\nKeyWords: ")
    for i in searchs:
        print("  [+] %s" % i)
    return(urls, searchs, path)


def getUrls(urls, searchs):
    l = []
    pattern = "href=\"(.+?)\""
    r1 = re.compile(pattern, re.IGNORECASE)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'}
    for i in searchs:
        s = []
        url = urls + quote(i)
        req = urllib.request.Request(url=url, headers=headers)
        res = urllib.request.urlopen(req)
        html = res.read().decode('utf-8')
        soup = bs(html, 'html.parser')
        result = soup.find_all("h3")
        for i in result:
            i = str(i)
            s.append(re.findall(r1, i)[0])
        l.append(s)
    return l
    # 此处应当循环嵌套

# def getPages(urls):
#     #for i in urls:
#     i = "http://www.baidu.com/s?wd=" + "人际交往密切程度有多高"
#     r = requests.get(i)
#     return getUrls(i)


def main():
    # http://www.baidu.com/s?wd=example&pn=x
    while (True):
        print("Collecting informations...")
        (urls, searchs, path) = getInfo()
        x = input("Get again?(y/n)")
        if x == "y":
            continue
        if x == "n":
            break
        else:
            continue
    del(urls)
    urls = "http://www.baidu.com/s?wd="
    print(getUrls(urls, searchs))


if __name__ == '__main__':
    main()
# for url in urls:
#    r = requests.get(url)
#    print(r.status_code,r.content)