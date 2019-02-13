import poplib,sys,time,email
from imapclient import IMAPClient

popServer = "outlook.office365.com" #TLS
popPort = 995
smtpServer = "smtp.office365.com" #STARTTLS
smtpPort = 857
imapServer = "outlook.office365.com" #TLS
imapPort = 993
user = "lujunrui@outlook.com"
password = "ljr020221"

server = IMAPClient(imapServer)
server.login(user,password)
server.select_folder("INBOX",readonly=True)
result = server.search("UNSEEN")
msgdict = server.fetch(result,"FLAGS")
print(msgdict.items())

# 现在已经把邮件取出来了，下面开始解析邮件
for message_id, message in msgdict.items():
    e = email.message_from_string(message["b'FLAGS'"]) # 生成Message类型
    maintype = e.get_content_maintype()
    if maintype == 'multipart':
        for part in e.get_payload():
            if part.get_content_maintype() == 'text':
                mail_content = part.get_payload(decode=True).strip()
    elif maintype == 'text':
        mail_content = e.get_payload(decode=True).strip()
print('new message')
print('From: ', mail_from)
print('Subject: ', subject)
getstr = input('if you wanna read it, input y: ')
if getstr.startswith('y'):
    print('-'*10, 'mail content', '-'*10)
    print(mail_content.replace('<br>', '\n'))
    print('-'*10, 'mail content', '-'*10)
server.logout()