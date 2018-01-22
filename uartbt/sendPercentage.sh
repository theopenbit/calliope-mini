#!/bin/bash
# pair with bluetoothclt before starting this skript
# 
device="xx:xx:xx:xx:xx:xx"

refresh=30
while true; do 
    percentage=$(shuf -i 0-100 -n 1)
    percentage_asc=$(echo "$percentage." |  python -c "print raw_input().encode('hex'),")
    gatttool --device=$device -t random --char-write-req --handle=0x001b --value=$percentage_asc
    sleep $refresh
done

