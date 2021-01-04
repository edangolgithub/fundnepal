## curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
## sudo yum install python 3.7
## python3 -m pip install Django
## python3 -m django --version


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
## django-admin startproject mysite

# if sqlite 3.8 error comes do this 

###### wget http://www6.atomicorp.com/channels/atomic/centos/7/x86_64/RPMS/atomic-sqlite-sqlite-3.8.5-3.el7.art.x86_64.rpm
###### sudo yum localinstall atomic-sqlite-sqlite-3.8.5-3.el7.art.x86_64.rpm
###### mv /lib64/libsqlite3.so.0.8.6{,-3.17}
###### sudo cp /opt/atomic/atomic-sqlite/root/usr/lib64/libsqlite3.so.0.8.6 /lib64


## navigate to mysite folder 
```
python3 manage.py runserver
```
