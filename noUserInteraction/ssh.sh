#!/usr/bin/expect -f
spawn ssh user@192.168.1.173
expect "password:"
sleep 1
send "Renegade187!"
command1
command2
commandN