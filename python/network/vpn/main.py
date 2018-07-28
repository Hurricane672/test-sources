import smtplib
from email.mime.text import MIMEText
from email.header import Header
import urllib.request
import time
from lxml import etree

def getIDs(n):
    url = "http://46.181.48.122:54432/cn/"
    #res = requests.get(url).text
    page = urllib.request.Request(url)
    res = urllib.request.urlopen(page).read().decode('utf-8')
    html=etree.HTML(res)
    xpaths=[]
    result = []
    for i in range(2,n+2):
        xpaths.append('//*[@id="vg_hosts_table_id"]/tr['+str(i)+']/td[2]/b/span/text()')
    for i in xpaths:
        result.append(html.xpath(i)[0])
    return result

def sendEmail(n,mes):
    mail_host = 'smtp.office365.com'
    mail_user = 'lujunrui@outlook.com'
    mail_pass = 'ljr020221'
    sender = 'lujunrui@outlook.com'
    receivers = ['lujunrui@outlook.com','274588969@qq.com'] 
    
    message = MIMEText(mes,'plain','utf-8') 
    message['Subject'] = 'TOP '+str(n)+' Servers'
    message['From'] = sender 
    message['To'] = receivers[0] 
    
    try: 
        smtpObj = smtplib.SMTP(mail_host,587)
        smtpObj.starttls()
        smtpObj.login(mail_user,mail_pass)
        smtpObj.sendmail(
        sender,receivers,message.as_string())
        smtpObj.quit()
        print('Send successfully!')
    except smtplib.SMTPException as e:
        print('error',e)
def main():
    n = int(input("How much: "))
    result = getIDs(n)
    nowTime = time.asctime(time.localtime(time.time()))
    message = nowTime + '\n'
    for i in range(len(result)):
        mes = str(i) + '. ' + result[i] + '\n'
        message += mes
    message += 'Account:vpn Password:vpn'
    sendEmail(n,message)
if __name__ == '__main__':
    main()