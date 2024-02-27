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
SUPABASE_PROJECT_URL = os.getenv('SUPABASE_PROJECT_URL')
SUPABASE_API_KEY = os.getenv('SUPABASE_API_KEY')
supabase_client = create_client(SUPABASE_PROJECT_URL, SUPABASE_API_KEY)

#################################### API ENDPOINTS ######################################

'''
INDEX ROUTE
List ALL Parameters/Arguments & Return Types
'''
@app.route('/')
def index():
    return "Hello"


'''
Example Route:

@app.route('/auto_complete', methods=['GET', 'POST'])
def auto_complete():
    data = request.json
    
    category = data['suggested_category']
    item = data['item']
    keywords = data['keywords']
    
    description = auto_completion.get_completion(item, category, keywords)
    
    return description
'''

#################################### USER ROUTES ######################################




#################################### POST ROUTES ######################################




# DEV: Run on PORT: 8080 
if __name__ == "__main__":
    app.run(debug=True, port=8080)