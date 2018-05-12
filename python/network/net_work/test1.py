# encoding python 2.7
import socket
def retBanner (ip,port):
    try :
        socket.setdefaulttimeout(2)
        s = socket.socket()
        s.connect((ip,port))
        banner = s.recv(1024)
        return banner
    except :
        return
def checkVulns(banner):
    if 'FreeFloat Ftp Server' in banner:
        print '[+] FreeFloat Ftp Server is vulnerable.'
    elif '3Com 3CDaemon FTP Server' in banner:
        print '[+] 3CDaemon Ftp Server is vulnerable.'
    elif 'Ability Server' in banner:
        print '[+] Ability Ftp Server is vulnerable.'
    elif 'Sami Ftp Server' in banner:
        print '[+] FreeFloat Ftp Server is vulnerable.'
    else:
        print '[-] Ftp Server is not vulnerable.'
    return
def connectFTP():
    portList = [21,22,25,80,110,443]
    for x in range(1,255):
        ip = '192.168.95.' + str(x)
        for port in portList:
            banner = retBanner(ip,port)
            if banner:
                print '[+] ' + ip + ': ' + banner
                checkVulns(banner)
if __name__ == '__main__':
    connectFTP()