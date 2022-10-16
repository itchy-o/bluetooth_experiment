# What goes here

* src/ : custom software to run experiments and generate data


# How to

1. Run `sudo hcitool lescan` to see a list of BLE devices.


* I installed node.js on the pi.
* Run `sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev` on the pi.
* Add the following line at the bottom of /etc/bluetooth/main.conf: `DisablePlugins=pnat`
* Go into the `/src/nodejs-app` folder and run `npm install`.
* Then run `npm start`.
