# coding=gbk
list = [i for i in input("Enter two value(example: 32 C): ").split(" ")]#
#[32,1]
list[0] = int(list[0])
if (len(list))==2:
    if(list[1]=="C"):
        print(1.8*list[0] + 32)
    if(list[1]=="F"):
        print((list[0] - 32) / 1.8)
else:
    print("250")