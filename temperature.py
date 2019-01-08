import os
import time

oldtemp = 0

while True:
    file = open('/home/pi/AC_Project/MindLabs/temp.txt', 'r')
    temp = file.read()

    count = 1

    if oldtemp == temp:
        time.sleep(1)
    else:
        if temp=='60':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 3')
                time.sleep(1)
        elif temp=='61':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 4')
                time.sleep(1)
        elif temp=='62':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 5')
                time.sleep(1)
        elif temp=='63':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 6')
                time.sleep(1)
        elif temp=='64':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 7')
                time.sleep(1)
        elif temp=='65':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 8')
                time.sleep(1)
        elif temp=='66':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 9')
                time.sleep(1)
        elif temp=='67':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 10')
                time.sleep(1)
        elif temp=='68':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 11')
                time.sleep(1)
        elif temp=='69':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 12')
                time.sleep(1)
        elif temp=='70':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 13')
                time.sleep(1)
        elif temp=='71':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 14')
                time.sleep(1)
        elif temp=='72':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 15')
                time.sleep(1)
        elif temp=='73':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 16')
                time.sleep(1)
        elif temp=='74':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 17')
                time.sleep(1)
        elif temp=='75':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 18')
                time.sleep(1)
        elif temp=='76':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 19')
                time.sleep(1)
        elif temp=='on':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 1')
                time.sleep(1)
        elif temp=='off':
            for x in range(0, count):
                os.system('python /home/pi/AC_Project/MindLabs/irrp.py -p -g17 -f/home/pi/AC_Project/MindLabs/codes 2')
                time.sleep(1)
        else:
            print('something went wrong')
        
    oldtemp = temp
