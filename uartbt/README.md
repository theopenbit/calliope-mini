Send a percentage value via bluetooth to the calliope.
You have to pair the calliope with ```sudo bluetoothctl``` and put the right btaddr into the script ```sendPercentage.sh``` before starting it.  


how to pair Calliope using ```bluetoothcfg```:
```
#sudo bluetoothcfg
> scan on
## set calliope in pairing mode. i.e. push A+B and reset-Button. Press A+B until pairing mode starts.
> trust <baddr>
> pair <baddr>
```

write  ```<baddr>``` in ```sendPercentage.sh```
