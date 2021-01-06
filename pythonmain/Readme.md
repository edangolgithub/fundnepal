

## curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
## sudo yum install python 3.7

# install virtualenv using pip3
sudo pip3 install virtualenv 
# create a virtual environment
virtualenv venv 

# Active your virtual environment:
source venv/bin/activate

```
 [ec2-user@ip-172-31-90-183 pythonmain]$ source venv/bin/activate
(venv) [ec2-user@ip-172-31-90-183 pythonmain]$ python --version
Python 3.7.6
```

## python3 -m pip install Django or pip install Django
## python3 -m django --version



## django-admin startproject fundnepalpython

# if sqlite 3.8 error comes do this 

###### wget http://www6.atomicorp.com/channels/atomic/centos/7/x86_64/RPMS/atomic-sqlite-sqlite-3.8.5-3.el7.art.x86_64.rpm
###### sudo yum localinstall atomic-sqlite-sqlite-3.8.5-3.el7.art.x86_64.rpm
###### mv /lib64/libsqlite3.so.0.8.6{,-3.17}
###### sudo cp /opt/atomic/atomic-sqlite/root/usr/lib64/libsqlite3.so.0.8.6 /lib64

### or if above doesnt work

```
than your third-party 3.8. This means that when you build pysqlite2, by default, it will find and use that 3.7, so it's not doing you any good. And you probably don't want to change around your whole path just to deal with this.

But that's fine, as long as the 3.8 is found first at build time, it doesn't matter what comes first at runtime; the path to 3.8 will be baked into the module. There are a number of ways to do this, but the simplest is something like this:

$ brew install sqlite3
$ sudo -s
# LDFLAGS=-L/usr/local/opt/sqlite/lib CPPFLAGS=-I/usr/local/opt/sqlite/include pip2.7 install pysqlite
# ^D
$ python
>>> import sqlite3
>>> sqlite3.sqlite_version
'3.7.13'
>>> import pysqlite2.dbapi2
>>> pysqlite2.dbapi2.sqlite_version
'3.8.6'
```


## navigate to mysite folder 
```
python3 manage.py runserver
```
```
 sudo rm /usr/bin/python3
 sudo ln -s python3.8 /usr/bin/python3
```
```
sudo python3.8 get-pip.py
```

```
export FLASK_APP="file name .py"
flask run
```