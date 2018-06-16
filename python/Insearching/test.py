import urllib
import urllib3
import re
import requests
from bs4 import BeautifulSoup

l = []
url = r"https://www.baidu.com/s?wd=%E4%BA%BA%E9%99%85%E4%BA%A4%E5%BE%80%E5%AF%86%E5%88%87%E7%A8%8B%E5%BA%A6%E6%9C%89%E5%A4%9A%E9%AB%98&rsv_spt=1&rsv_iqid=0xa2812a4600031dcb&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=001&rsv_n=2"
headers ={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'}
req = urllib.request.Request(url=url,headers=headers)
res = urllib.request.urlopen(req)
html = res.read().decode('utf-8')
soup = BeautifulSoup(html,'html.parser')
result = soup.find_all("h3")
pattern = "href=\"(.+?)\""
r1 = re.compile(pattern,re.IGNORECASE)
for i in result:
    i = str(i)
    l.append(re.findall(r1,i)[0])
print(l)