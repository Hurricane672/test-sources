import urllib.request
import urllib.parse
import urllib
import math
import time
import random
import hashlib
timeStamp = int(time.time()*1000) + random.randint(0,10)
c = "rY0D^0'nM0}g5Mm1z%1G4"
u = "fanyideskweb"
d = "hello"
f = str(timeStamp)
sign = hashlib.md5((f+d+u+c).encode("utf-8")).hexdigext()
print (sign)
# print (timeStamp)
datas = {
    'i': 'hello',
    'from': 'AUTO',
    'to': 'AUTO',
    'smartresult': 'dict',
    'client': 'fanyideskweb',
    'salt': timeStamp,
    'sign': '256a93e4988be9b6e0b38a06fbb671f0',
    'doctype': 'json',
    'version': '2.1',
    'keyfrom': 'fanyi.web',
    'action': 'FY_BY_CLICKBUTTION',
    'typoResult': 'true'
}
data = urllib.parse.urlencode(datas).encode('utf-8')
request = urllib.request.Request(url = 'http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule&sessionFrom=', data = data, method = 'POST')
response = urllib.request.urlopen(request)
print (response.read().decode('utf-8'))
# print(data)
