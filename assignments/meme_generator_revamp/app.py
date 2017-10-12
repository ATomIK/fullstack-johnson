from flask import Flask, render_template, url_for, request, jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder="site")
CORS(app)

@app.route('/', methods=["GET"])
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=8080)
