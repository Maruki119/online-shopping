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

#users
@app.route('/api/users', methods = ["GET"])
def get_all_users():
    all_users = users_collection.find()
    return jsonify({"users":[i for i in all_users]})

@app.route("/api/users/<int:user_id>", methods = ["GET"])
def get_user(user_id):
    all_users = users_collection.find()
    user = next( (i for i in all_users if i["_id"] == user_id), None)
    if user:
        return jsonify(user)
    else:
        return jsonify({"error": "User not found"}), 404
     
@app.route("/api/users", methods = ["POST"])
def create_user():
    try:
        data = request.get_json()
        new_user = {
            "_id": users_collection.count_documents({}) + 1,
            "user": data["user"],
            "password": data["password"],
            "email": data["email"],
            "fullname": data["fullname"],
            "balance": 0
        }
        all_users = list(users_collection.find())
        if(next((s for s in all_users if s["user"] == data["user"]), None)):
            return jsonify( {"error":"Cannot create new user"}), 500
        else:
            users_collection.insert_one(new_user)
            return jsonify(new_user),200
    except Exception as e:
        print(e)
     
@app.route("/api/users/<int:user_id>", methods = ["PUT"])
def update_user(user_id):
    all_users = users_collection.find()
    user = next( (i for i in all_users if i["_id"] == user_id), None)
    if user:
        data = request.get_json()
        users_collection.update_one({"_id": user_id}, {"$set": data})
        return jsonify(user), 200
    else:
        return jsonify({"error": "User not found"}), 404
    
if __name__=="__main__":
    app.run(host = "0.0.0.0", port = 5000, debug = True)