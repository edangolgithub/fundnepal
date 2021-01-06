from flask import Flask
import requests
import json

app = Flask(__name__)
@app.route('/')
def hello_world():
    
    api_url_base = "http://api.open-notify.org/astros.json"
    

    response = requests.get(api_url_base)

    if response.status_code == 200:
        return json.loads(response.content.decode('utf-8'))
    else:
        return None