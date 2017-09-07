'''

to do:
 - cloudflare; ip to https://dev.thomasj.me via srv record to hide ip and port for public view.
 - python server auto start in ubuntu
 - learn how to live reload an app file instead of restarting server

'''

from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
	return "welcome to hell"

@app.route("/ohgod")
def ohgod():
	return "ohgod"

app.run(host='0.0.0.0', port=9000, debug=False)
