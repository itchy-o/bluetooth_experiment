#! /bin/bash -x
# Capture btmon output w timestamps
# To run at startup using /etc/rc.local 

#BTMON="/usr/bin/btmon"

# sudo btmon -T >> logfile.txt &
# sudo stdbuf -i0 -oL -eL ./bluez-5.55/monitor/btmon -T > xx2
# COLUMNS=200 sudo stdbuf -i0 -oL -eL "$BTMON" -T > xx3
# sudo stdbuf -i0 -oL -eL "$BTMON" -T > xx3
# sudo stdbuf -i0 -oL -eL "$BTMON" -T -w yy3

LOGFILE="./btmon_$(hostname -s)_$(date -Iseconds).txt" ; script -f -c ./l2.sh "$LOGFILE"
PID1="$!"
echo "PID1 = $PID1"
sleep 5

sudo hcitool lescan --duplicates
PID2="$!"
echo "PID2 = $PID2"

echo "sleeping for 60"
sleep 60
echo "all done!!"

kill $PID2
sleep 5
kill $PID1


