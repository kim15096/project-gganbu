from flask import Flask, render_template, request, redirect
from supabase import create_client, Client
from datetime import datetime
from flask_cors import CORS
import os
from dotenv import load_dotenv

#################################### SETUP ######################################
app = Flask(__name__)
CORS(app)
load_dotenv()
url: str = os.environ.get("SUPABASE_PROJECT_URL")
key: str = os.environ.get("SUPABASE_API_KEY")
supabase: Client = create_client(url, key)

#################################### API ENDPOINTS ######################################

'''
INDEX ROUTE
List ALL Parameters/Arguments & Return Types
'''
@app.route('/')
def index():
    return "Hello"

@app.route('/get_name', methods=['GET'])
def get_name():
    response = supabase.table('Users').select("*").execute()
    data = response.data
    return data

#################################### USER ROUTES ######################################


#################################### POST ROUTES ######################################
'''
Get Home Events
'''
@app.route('/get_home_events', methods=['GET'])
def get_home_events():
    response = supabase.table('Events').select("*").execute()
    data = response.data
    return data

# DEV: Run on PORT: 8080 
if __name__ == "__main__":
    app.run(debug=True, port=8080)