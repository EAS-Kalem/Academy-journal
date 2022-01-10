#!/bin/bash


expect -c "
        spawn ssh root@192.168.1.173; 
        expect \"pass*\"; send \"Renegade187!\r\"; interact"