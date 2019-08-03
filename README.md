My goal for this project was to use a Raspberry Pi 3 to control my A/C and connect it to the cloud. My A/C system is pretty old and controlled by an IR Remote, and I wanted to be able to control it with my phone or computer. I wanted to be able to use a phone or computer to control my A/C from anywhere, including when I was outside my house, so I decided to use a Raspberry Pi and IR Led. Here is how I made my old A/C system a little bit smarter.

What I used for this Project:

Raspberry Pi 3  

IR Led
  
IR Receiver
  
Transistor
  
1K Ohm Resistor

The circuit for this project should look like this:
![alt text](https://cdn.instructables.com/FEL/FXOD/J7MFSVLB/FELFXODJ7MFSVLB.LARGE.jpg)

After completing the circuit on a breadboard I soldered it together and shrink-wrapped so it would look nice.

After the circuit is completed I started to set up the pi with the code. 

First after installing noobs on the raspberry pi I wrote programs onto the pi that would create a website that would be used to control the a/c. To do this I first created a simple node js website. After that I installed socket.io using npm install. This website helped me create a simple website and install socket.io: https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp. My main html webpage is above. The code in routes.js and index.js was written into the corresponding files so an outside device coud talk to the pi. The python files were also made in the same folder.

I wrote all of the code except for one file, I did not write the python code to record and playback ir codes. I got that from this link:
http://abyz.me.uk/rpi/pigpio/examples.html
Specific File:
IR Record and Playback

Then I used the command “ ./irrp.py -r -g4 -fcodes 1 2 3 4 5 6 ” to record each ir command that you want your raspberry pi remote to playback. When I ran the command I had numbers 1 through 20 because I had 20 different codes, 1 for each temperature and 2 for the on/off.

The main communication method is a raspberry pi hosting a web server that any device on the internet can go on. There is an website where you can control the temperature from anywhere as long as you're on the same wifi. I also made an android app that can connect to the raspberry pi  server for easier temperature control. The code to the phone app is here: https://github.com/sreekarc/AutonomousA-C-Phone-App. In the phone app code I had to set the raspberry py ip address as the ip address to connect to in the phone's socket.io

After all the code was done there was one last thing I had to do, which was make it so that the code would all start running as the pi booted up. This way it could be headless. To do this I first went to the terminal and wrote `sudo nano /etc/rc.local`. Then I added these three lines of code to the end of the file right before "exit 0":

`sudo pigpiod`

`/usr/bin/python3 /home/pi/AC_Project/MindLabs/temperature.py >> /tmp/junk.txt &`

`node /home/pi/AC_Project/MindLabs/index.js >> /tmp/junk1.txt &`

After all the code was set up I modeled a case that would fit a raspberry pi and all the circuitry with Autodesk Inventor and printed it with my 3D printer. It all fit very snugly and the led went through the hole on the top.
![ac](https://user-images.githubusercontent.com/15959693/62400819-a01f6780-b54e-11e9-9b17-b91f93819d07.PNG)
