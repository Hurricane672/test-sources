import itertools as its
word = "0123456789abcdefghijklmnopqrstuvwxyz"
#l=["0","1","2","3","4","5",
#    "6","7","8","9","a","b",
#    "c","d","e","f","g","h",
#    "i","j","k","l","m","n",
#    "o","p","q","r","s","t",
#    "u","v","w","x","y","z"]
r = its.product(word,repeat=8)
file = open("test.txt","w")
for i in r:
    h = "".join(i)
    print(h)
    file.writelines(h)
