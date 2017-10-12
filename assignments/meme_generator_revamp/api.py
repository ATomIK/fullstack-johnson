from flask import Flask, render_template, url_for, jsonify
import requests, json, random, os, time, hashlib
from flask import request
from flask_cors import CORS
from pymongo import MongoClient

db = 'memes_db'
client = MongoClient()

IMAGEDIR = './memes_blank'

app = Flask(__name__)
CORS(app)

@app.route('/', methods=["GET","POST"])
def index():
    return jsonify({"success" : True})

@app.route('/user/new', methods=["POST"])
def register():

    print(request.values)

    newUser = {}

    # tesing = {"testing": "test","testing123":"123"}

    newUser['first'] = request.form['first']
    newUser['last'] = request.form['last']
    newUser['email'] = request.form['email']
    newUser['username'] = request.form['username']
    newUser['pass'] = request.form['pass']

    newUser["_id"] = client[db]["users"].find().count()

    exists = client[db]["users"].find({"email":newUser['email']}).count()

    if exists == 0:
        if client[db]["users"].insert(newUser):
            return jsonify({"success": True})
        else:
            return jsonify({"success": False, "error": "Insert error."})
    else:
        return jsonify({"success":False, "error": "User exists."})

    return jsonify({"success": True})

if __name__ == '__main__':
    app.run(host='localhost', debug=True, port=5050)
