#!/bin/bash

systemctl enable firewalld
npm install pm2 -g
   
echo "adding firewall acceptions"
firewall-cmd --permanent --add-port=80/tcp
firewall-cmd --permanent --add-port=8081/tcp
firewall-cmd --reload
echo "firewall reloaded"

echo "reloading network"
ifdown ens160 && ifup ens160
nmcli connection reload
echo "network reloaded"

echo "running server"
pm2 start http-server -p 8081 /etc/hidden_folder/apps/ 
echo "server running"
