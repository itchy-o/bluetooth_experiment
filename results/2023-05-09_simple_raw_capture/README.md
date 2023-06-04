# Summary
This file is a raw capture of the output from `btmon`.

There was no filtering or postprocessing, and so it represents a worst-case collection of `btmon` BLE output.

## Collection Environment
All devices were on the ground floor at home, inside the house.

## Devices
* There was a single stationary Raspberry Pi 4B as BT receiver/logger.
* I moved two BT devices around the house: a OnePlus 6T cellphone; I forget the other (Zoleo?).
  Manually and randomly moved them around, sometimes close to the receiver, sometimes far away and obscured.
* There were an unknown number of "ambient" stationary BT devices (i.e.: devices that I didn't explicitly activate)

## Script running on receiver/logger.
```
sudo btmon > logfile.txt &
sudo hcitool lescan --duplicates
```

-- [mew-cx](https://github.com/mew-cx)
