import time
def get_channels():
    channels = []
    tags = input('Channels you want(between 1 and 40): ').split()
    for value in tags:
        j = int(value)
        if j <= 40:
            if j >= 1:
                channels.append(j)
                print('Pin number: '+ str(j) +' got!')
                time.sleep(0.3)
            else:
                print('Pin number: '+ str(j) +' is not in 1~40')
                time.sleep(0.3)
                continue
        else:
            print('Pin number: '+ str(j) +' is not in 1~40!')
            time.sleep(0.3)
            continue
    f = [str(g) for g in channels]
    s = ' '.join(f)
    print('Got pin number(s): '+s+ '!' )
    input('Press any key to continue!')
    return channels
get_channels()
