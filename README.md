<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h1 align="center">This is readme file of main branch of Fund Nepal Repo</h1>

<h1 align="center" style="color:red;">To view readme files of branches navigate into the folder</h1>

# improve linux
```
sudo cat /proc/sys/vm/swappiness
sudo cat /proc/sys/vm/vfs_cache_pressure

sudo sysctl -w vm.swappiness=10
sudo sysctl -w vm.vfs_cache_pressure=200

```


# How To Add Swap on Amazon Linux EC2
Of course, on low-memory instances swap is wise. To add a 1GB swap file for example, from command line you’ll type:

sudo dd if=/dev/zero of=/swapfile bs=1024 count=1048576
Now setup the swap file with the command:

sudo mkswap /swapfile
sudo chmod 600 /swapfile
Now enable the swap:

sudo swapon /swapfile
If you use the top command, you should now see the 1gb swap added. So now lets make swap persistent so it’s not dropped when you reboot. Edit /etc/fstab file and add this line as the last line:

/swapfile swap swap defaults 0 0

