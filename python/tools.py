import smtplib
from email.mime.text import MIMEText
from email.header import Header
import urllib.request
import time

def sendEmail(user,passwd,sender,receiver,sub,mes,addtime=True):
    mail_host = 'smtp.office365.com'
    mail_user = user
    mail_pass = passwd
    if addtime:
        mes = mes + '\n' + time.asctime(time.localtime(time.time()))
    message = MIMEText(mes,'plain','utf-8')
    message['Subject'] = sub
    message['From'] = sender
    message['To'] = receiver
    
    try: 
        smtpObj = smtplib.SMTP(mail_host,587)
        smtpObj.starttls()
        smtpObj.login(mail_user,mail_pass)
        smtpObj.sendmail(
        sender,receiver,message.as_string())
        smtpObj.quit()
        print('Send successfully!')
    except smtplib.SMTPException as e:
        print('error',e)