from flask import Flask, render_template, request, url_for, jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder="site")
CORS(app)

app.config['TEMPLATES_AUTO_RELOAD'] = True

def has_no_empty_params(rule):
	defaults = rule.defaults if rule.defaults is not None else ()
	arguments = rule.arguments if rule.arguments is not None else ()
	return len(defaults) >= len(arguments)

@app.route("/", methods=['GET'])
def index():
	return render_template("index.html")

@app.route('/site-map', methods=['GET'])
def site_map():
	links = []
	for rule in app.url_map.iter_rules():
		if "GET" in rule.methods and has_no_empty_params(rule):
			url = url_for(rule.endpoint, **(rule.defaults or {}))
			if not url == '/site-map':
				links.append((url, rule.endpoint))
	if len(links) > 0:
		return jsonify({"success": True,"routes":links})
	else:
		return jsonify({"success": False,"routes":links})

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8080, debug=False)
