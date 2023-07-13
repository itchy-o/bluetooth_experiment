
# BT Scanner Server




## Install on Raspian

1. Starting with Raspian v11.
2. libbluetooth-dev needs to be installed...
   1. `sudo apt-get update`
   2. `sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev`
3. Use nvm to install node.js.
   1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
   2. `nvm install v12.22.12`
4. As explained in [this bug report](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=690749) we must disable the pnat plugin. Run `sudo nano /etc/bluetooth/main.conf` and add this line to the bottom, `DisablePlugins=pnat`.
5. Restart the machine.
6. Configure setcap by running.
   1. `sudo apt-get install libcap2-bin`
   2. `sudo setcap cap_net_raw+eip $(eval readlink -f \`which node\`)`
7. Change to the bt-client folder and install dependencies.
   1. `cd bluetooth_experiment/src/bt-scanner-client`
   2. `npm install`
7. In the bt-scanner-client folder create a file called `.env` and copy the contents of the `.env-sample` file.
8. Run `npm start` to start the scanner. Or run `npm start > output.csv` to put the results to a file. Hit `control-C` to stop it.

## Install on Mac

1. You need to have [XCode](https://itunes.apple.com/ca/app/xcode/id497799835?mt=12) installed.
2. Allow bluetooth access on the terminal app: "System Preferences" —> "Security & Privacy" —> "Bluetooth" -> Add terminal app
3. Clone the repo `git clone https://github.com/itchy-o/bluetooth_experiment.git`. Try authenticating with your username and password. If that doesn't work, you'll need to go to the settings page in your github account and set up an SSH key.
4. Use [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) to install node, `nvm install latest`.
5. In the bt-scanner-client folder create a file called `.env` and copy the contents of the `.env-sample` file.
5. Install the depenedencies and run the scanner with these commands.
```
cd bluetooth_experiment/src/bt-scanner-client
npm install
npm start
```
1. Hit `control-C` to stop it.


# Example

The file `example-output.txt` shows what the output should look like.

To send the output to a file use `npm start > filename.txt`.

The file `dpkg.txt` is an output of the files installed on the pi.
