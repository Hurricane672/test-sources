#coding=gbk
c = 3
list = [2]
while True:
    for i in list:
        if c%i!=0:
            pass
        if c%i==0:
            break
        if c%i!=0 and i==list[-1]:
            list.append(c)
            print(list)
    c += 1
    continue
# print(list)