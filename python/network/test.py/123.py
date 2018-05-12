#c = 0
#h = 1/100
#x = 0
#active = True
#while active:
#    if x < 1:
#        x = h + 1/((c+1)*100+100)
#        c +=  1
#        continue
#    if x >= 1:
#        print (c,x)
###

#Eternal = []
#heart = [32,73,32,76,79,86,69,32,89,79,85,33]
#for you in heart:
#    Eternal += chr(you)
#somethingImportant = str(int("0x7F",16)) + "".join(Eternal)
#print(somethingImportant)
###
try:
    k = 0
    print("This is a translation method.")
    text = input("Enter your text: ")
    text = int(text,16)
    key = input("Enter your key: ")
    key = int(key,16)
    text = list(text + key)
    mask = ("Enter your mask: ")
    mask = list(mask)
    for c in mask:
       if c == 1:
           k += 1
           pass
       if c == 0:

    print(text)
except:
    print("Translate failed.")