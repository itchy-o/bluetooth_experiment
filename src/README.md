# What goes here

* src/ : custom software to run experiments and generate data


# How to

1. OLD WAY: Run `sudo hcitool lescan` to see a list of BLE devices detected by the raspberry pi.
2. NEW WAY: Run `bluetoothctl scan on` to see a list of BLE devices detected by the raspberry pi.


# BT Scanner Client

The [BT Scanner Client](./bt-scanner-client/README.md) scans for bluetooth devices in the area,
and records them as a CSV. Setup instructions for both mac and linux.

# How to copy an SD card on Mac

1. `diskutil list` and find the disk name e.g. disk6.
2. `sudo dd if=/dev/disk6 of=~/PiSDCardBackup.dmg`.
3. To restore, umount the new disk first with `diskutil unmountDisk /dev/disk1`, then write to it with `sudo dd if=~/PiSDCardBackup.dmg of=/dev/disk7`.
