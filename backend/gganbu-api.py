from flask import Flask, render_template, request, redirect
from supabase import create_client, Client
from datetime import datetime
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


'''
INDEX ROUTE
'''
@app.route('/')
def index():
    return "Hello"


# DEV: Run on PORT: 8080 
if __name__ == "__main__":
    app.run(debug=True, port=8080)