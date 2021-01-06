from flask import Flask
import requests
import pandas as pd
import pymysql

app = Flask(__name__)

@app.route('/data')
def data():
    host="fundnepaldbcluster.cluster-cjiabok62vq8.us-east-1.rds.amazonaws.com"
    port=3306
    dbname="fundnepaldb"
    user="root"
    password="mysqlpassword"

    con = pymysql.connect(host, user=user,port=port,
                           passwd=password, db=dbname)
    try:

     with con.cursor() as cur:

      cur.execute('SELECT VERSION()')

      version = cur.fetchone()

      print(f'Database version: {version[0]}')
      print(con.server_version)
      cur.execute("select * from user")
      rows = cur.fetchall()
      for row in rows:
        print(f'{row[0]} {row[1]} {row[2]}')
    finally:
      con.close()     
      return "ok"

@app.route('/')
def hello_world():
    
    api_url_base = "http://api.open-notify.org/astros.json"
    api="https://sa87fhffjj.execute-api.us-east-1.amazonaws.com/Stage"

   #response = requests.get(api)
    response=requests.get(api_url_base)
    if response.status_code == 200:
        #return response.content
        return response.json();
    else:
        return None