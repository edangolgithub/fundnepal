## curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
## sudo yum install python 3.7
## python3 -m pip install Django
## python3 -m django --version
## django-admin startproject mysite

# if sqlite 3.8 error comes do this 
```
wget http://www6.atomicorp.com/channels/atomic/centos/7/x86_64/RPMS/atomic-sqlite-sqlite-3.8.5-3.el7.art.x86_64.rpm
sudo yum localinstall atomic-sqlite-sqlite-3.8.5-3.el7.art.x86_64.rpm
sudo mv /lib64/libsqlite3.so.0.8.6{,-3.17}
sudo cp /opt/atomic/atomic-sqlite/root/usr/lib64/libsqlite3.so.0.8.6 /lib64
``` 

## navigate tomysite folder 
```
python3 manage.py runserver
```