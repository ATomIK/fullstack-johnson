from flask import Flask, url_for, request, jsonify

from flask_cors import CORS

import requests, random, os, time

from pymongo import MongoClient

from helpers import has_no_empty_params

client = MongoClient

IMAGEDIR = './memes_blank'

# memes db
db = 'memes_db'

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return site_map()

@app.route('/meme_generator/v1.0/site_map', methods=['GET'])
def site_map():
    links = {}
    methods = ["DELETE", "GET", "PATCH", "POST", "PUT"]
    for rule in app.url_map.iter_rules():
        # Filter out rules we can't navigate to in a browser
        # and rules that require parameters

        for m in methods:
            if m in rule.methods and has_no_empty_params(rule):
                if not m in links:
                    links[m] = []
                url = url_for(rule.endpoint, **(rule.defaults or {}))
                links[m].append((url, rule.endpoint))

    # links is now a list of url, endpoint tuples
    if len(links) > 0:
        return jsonify({"success": True, "routes": links})
    else:
        return jsonify({"success": False, "routes": links})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=8080)
