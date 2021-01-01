#!/usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/home/ec2-user/fundnepal/pythonmain/flask/")

from flask import app as application
application.secret_key = 'bcd123'