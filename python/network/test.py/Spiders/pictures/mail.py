# coding:utf-8

#    __author__ = 'Mark sinoberg'
#    __date__ = '2016/5/26'
#    __Desc__ = 实现发送带有各种附件类型的邮件
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

username = 'lujunrui@outlook.com'
password = 'ljr020221'
sender = username
receivers = ','.join(['274588969@qq.com'])

# 如名字所示： Multipart就是多个部分
msg = MIMEMultipart()
msg['Subject'] = 'Your flower!'
msg['From'] = sender
msg['To'] = receivers

# 下面是文字部分，也就是纯文本
puretext = MIMEText('This is your flower in')
msg.attach(puretext)

# jpg类型的附件
jpgpart = MIMEApplication(open(r'E:\testpy\test.py\Spiders\pictures\598c1c1dbaea1.jpg', 'rb').read())
jpgpart.add_header('Content-Disposition', 'attachment', filename=r'E:\testpy\test.py\Spiders\pictures\598c1c1dbaea1.jpg')
msg.attach(jpgpart)
##  下面开始真正的发送邮件了
try:

    client = smtplib.SMTP()
    client.connect('smtp-mail.outlook.com')
    client.login(username, password)
    client.sendmail(sender, receivers, msg.as_string())
    client.quit()
    print ('带有各种附件的邮件发送成功！')
except smtplib.SMTPRecipientsRefused:
    print ('Recipient refused')
except smtplib.SMTPAuthenticationError:
    print ('Auth error')
except smtplib.SMTPSenderRefused:
    print ('Sender refused')