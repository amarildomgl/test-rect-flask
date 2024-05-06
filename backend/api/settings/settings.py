from flask import Flask, request, make_response, jsonify, url_for
from flask_sqlalchemy import SQLAlchemy

from flask_marshmallow import Marshmallow
from flask_restful import Api, Resource
from flask_cors import CORS
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__, static_folder='../static', static_url_path='')
CORS(app)

app.config['JSON_SORT_KEYS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///presente.db'

db = SQLAlchemy(app)
ma = Marshmallow(app)
api = Api(app)
