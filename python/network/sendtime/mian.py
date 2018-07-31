import sys
sys.path.append("E:\\test-sources\\python")
from tools import sendEmail
import time

mes = str(int(time.time())-1529236800)
user = "lujunrui@outlook.com"
sendEmail(user,"ljr020221",user,user,"newTime",mes,addtime=False)