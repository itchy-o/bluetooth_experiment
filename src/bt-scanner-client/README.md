
# Next steps

+ Divide into client & server projects.
+ Filter data to known devices, before it goes over the pipe. Use peripheral.address instead of uuid.
+ Use ENV to create a scanner ID.
+ Use socket.io to send data.
+ Build basic application framework & admin UI for the server.
+ Some mechanism to accept and que sensor data.
+ Start doing the translateralization math.


# Install on Raspian (incomplete)

1. Requires a Kernel version 3.6 or above.
1. libbluetooth-dev needs to be installed...
  1. `sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev`

...

1. To set the necessary privileges to run without sudo... This is required for all distributions (Raspbian, Ubuntu, Fedora, etc). You will not get any errors if running without sudo, but nothing will happen.
  1. `sudo apt-get install libcap2-bin`
  2. `sudo setcap cap_net_raw+eip $(eval readlink -f \`which node\`)`


# Install on Mac

1. You need to have [XCode](https://itunes.apple.com/ca/app/xcode/id497799835?mt=12) installed.
2. Allow bluetooth access on the terminal app: "System Preferences" —> "Security & Privacy" —> "Bluetooth" -> Add terminal app
3. Clone the repo `git clone https://github.com/itchy-o/bluetooth_experiment.git`. Try authenticating with your username and password. If that doesn't work, you'll need to go to the settings page in your github account and set up an SSH key.
4. Use [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) to install node, `nvm install latest`.
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
