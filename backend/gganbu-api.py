from flask import Flask, render_template, request, redirect
from supabase import create_client, Client
from datetime import datetime
from flask_cors import CORS
import os
from dotenv import load_dotenv
import jsonify

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
*** List ALL Parameters/Arguments & Return Types
'''
@app.route('/')
def index():
    print(supabase.auth.get_user())
    return "Hello"

@app.route('/get_name', methods=['GET'])
def get_name():
    response = supabase.table('Users').select("*").execute()
    data = response.data
    return data


#################################### USER ROUTES ######################################
'''
Google Callback: After user signs in with google, redirect to this endpoint with access token. Create a new row of user info (name, email, uuid).

Returns: A redirect to website main page 
'''
@app.route('/google_callback', methods=['GET'])
def google_callback():
    data = supabase.auth.get_user()
    print(data)
    return redirect("http://localhost:5173")
    
#################################### POST ROUTES ######################################
'''
Get Posts
'''
@app.route('/get_posts', methods=['GET'])
def get_posts():
    response = supabase.table('Events').select("*").execute()
    data = response.data
    return data


################################## ENTRY POINT #######################################

# DEV: Run on PORT: 8080 
if __name__ == "__main__":
    app.run(debug=True, port=8080)