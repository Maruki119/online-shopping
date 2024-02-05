from flask import Flask, jsonify, request
from pymongo.mongo_client import MongoClient

#add mongodb to api
uri = "mongodb+srv://user:user@online-shopping.uyqkvxp.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri)
#add client online-shopping = db
db = client["online-shopping"]
#add all collection
users_collection = db["users"]
items_collection = db["items"]
cards_collection = db["cards"]
 
#main app
app = Flask(__name__)
 
#greeting api
@app.route('/api')
def Greet():
    return "<p>Welcome to Online-Shopping Management API</p>"

@app.route('/api/users', methods = ['GET'])
def get_all_users():
    all_users = users_collection.find()
    return jsonify({"users":[i for i in all_users]})
     
if __name__=="__main__":
    app.run(host = "0.0.0.0", port = 5000, debug = True)