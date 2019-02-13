import urllib.request
import requests
import time
from lxml import etree
from bs4 import BeautifulSoup as bs

def getPages():
    url = "http://bj.58.com/chuzu/pn1/"
    res = requests.get(url).text
    page = urllib.request.urlopen(urllib.request.Request(url)).read().decode('utf-8')
    # res = urllib.request.urlopen(page).read().decode('utf-8')
    #print(res)
    soup = bs(res,'lxml')
    print(page)
    print(soup.find_all('h2/a'))
    html = etree.HTML(res)
    #print(html)
    xpath = "/body/div[4]/div[1]/div[5]/div[2]/ul/li[2]/div[2]/h2/a"
    xpath2 = "/html/body/div[4]/div[1]/div[5]/div[2]/ul/li[1]/div[2]/h2/a"
    #/html/body/div[4]/div[1]
    #/html/body/div[4]/div[1]/div[5]/div[2]/ul/li/div[2]/h2
    print(str(html.xpath(xpath2)))
#
def main():
    getPages()

if __name__ == '__main__':
    main()