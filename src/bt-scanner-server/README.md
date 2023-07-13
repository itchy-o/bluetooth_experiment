
# BT Scanner Server



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
