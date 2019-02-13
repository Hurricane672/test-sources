import sys
sys.path.append("E:\\test-sources\\python")
from tools import sendEmail
import time

time = int(time.time())-1529236800
mes = str(time)+"\n"+str(time/86400)
user = "lujunrui@outlook.com"
sendEmail(user,"ljr020221",user,user,"newTime",mes,addtime=False)