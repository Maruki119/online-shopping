from flask import Flask
import datetime
 
x = datetime.datetime.now()
 
app = Flask(__name__)
 
@app.route('/api/data')
def get_time():
    return {
        'Name':"geek",
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }
 
@app.route('/api')
def get_specific():
    return {
        'Name' : "Nititorn"
    }
     
if __name__=="__main__":
    app.run(host = "0.0.0.0", port = 5000, debug = True)