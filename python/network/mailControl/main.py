import poplib,sys,time
from imapclient import IMAPClient

popServer = "outlook.office365.com" #TLS
popPort = 995
smtpServer = "smtp.office365.com" #STARTTLS
smtpPort = 857
user = "lujunrui@outlook.com"
password = "ljr020221"

def readMail(user1,password,popServer,popPort):
    # try:
    server = poplib.POP3(popServer)
    # except:
    #     print("Error")
    #     return None
    server.set_debuglevel(1)
    print(server.getwelcome().decode('utf-8'))
    print(server.user(user1))
    server.pass_(password)
    # stat()返回邮件数量和占用空间:
    print('Messages: %s. Size: %s' % server.stat())
    # # list()返回所有邮件的编号:
    # resp, mails, octets = server.list()
    # # 可以查看返回的列表类似[b'1 82923', b'2 2184', ...]
    # print(mails)
    
    # # 获取最新一封邮件, 注意索引号从1开始:
    # index = len(mails)
    # resp, lines, octets = server.retr(index)
    
    # # lines存储了邮件的原始文本的每一行,
    # # 可以获得整个邮件的原始文本:
    # msg_content = b'\r\n'.join(lines).decode('utf-8')
    # # 稍后解析出邮件:
    # msg = Parser().parsestr(msg_content)
    
    # # 可以根据邮件索引号直接从服务器删除邮件:
    # # server.dele(index)
    # # 关闭连接:
    server.quit()


def main():
    readMail(user,password,popServer,popPort)

if __name__ == '__main__':
    main()