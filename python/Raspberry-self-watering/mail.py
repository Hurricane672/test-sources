from email.mime.text import MIMEText
import smtplib
from email.mime.multipart import MIMEMultipart
import email
fromaddr = 'lujunrui@outlook.com'
toaddr = 'lujunrui@outlook.com'
msg = MIMEMultipart()
msg['from'] = fromaddr
msg['To'] = toaddr

msg['Subject'] = 'Hello'
body = 'hello'

msg.attach(MIMEText(body,'plain'))

server = smtplib.SMTP('smtp-mail.outlook.com')

server.starttls()
server.login(fromaddr,'ljr020221')
text = msg.as_string()
server.sendmail(fromaddr,toaddr,text)
server.quit()
