import os

def main():
    con = open("python\\aria2\\config.txt",mode="r+")
    downlist = []
    downdict = {}
    i = 1
    for text in con:
        if i % 2 != 0:
            url = text.replace("\n","")
            downdict["url"] = url
            i += 1
            continue
        if i == 2:
            path = text.replace("\n","")
            if path == "":
                downdict["path"] = "D:/downloads"
            if path != "":
                downdict["path"] = path
            downlist.append(downdict)
            downdict = {}
            i = 1
            continue
    if i == 2:
        downdict["path"] = "D:/downloads"
        downlist.append(downdict)
        downdict = {}
    download(downlist)

def download(downlist):
    comlist = []
    for item in downlist:
        comlist.append("aria2c "+"-d "+item["path"]+" "+item["url"])
    i = 1
    for item in comlist:
        os.system(item)
        print("task "+str(i)+" complete!\n\n\n\n")

if __name__ == "__main__":
    main()