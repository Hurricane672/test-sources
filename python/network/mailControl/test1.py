import win32com.client as win32
import warnings
import sys
import pythoncom


pythoncom.CoInitialize()


sub = 'outlook python mail test'
body = 'my test\r\n my python mail'
outlook = win32.Dispatch('outlook.application')
receivers = ['lujunrui@outlook.com']
mail = outlook.CreateItem(0)
mail.To = receivers[0]
mail.Subject = sub
mail.Body = body
#mail.Attachments.Add('C:\Users\h00417865\Desktop\git_auto_pull_new.py')
mail.Send()