import os
import os.path


def listUIFiles():
    l = []
    dir = os.path.split(os.path.realpath(__file__))[0]
    files = os.listdir(dir)
    for filename in files:
        if os.path.splitext(filename)[1] == ".ui":
            l.append(filename)
    return l,dir


def transPYFile(filename):
    return os.path.splitext(filename)[0]+".py"


def main():
    (l,path) = listUIFiles()
    for uiFile in l:
        pyFile = transPYFile(uiFile)
        cmd = 'pyuic5 -o {path}\\{pyFile} {path}\\{uiFile}'.format(
            pyFile=pyFile, uiFile=uiFile, path=path)
        os.system(cmd)


if __name__ == '__main__':
    main()
