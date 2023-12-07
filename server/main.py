from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/random_color')
def random_color():
    color = "%06x" % random.randint(0, 0xFFFFFF)
    return jsonify(color=color)

if __name__ == '__main__':
    app.run()