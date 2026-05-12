from flask import Flask
app = Flask(__name__)
    
@app.route('/')
def hello_world():
    return "Hello ramez!"
@app.route('/Champions')
def champ():
    return "Hello Champions!"

@app.route('/say/<name>')
def say(name):
    return "Hello "+ name
    
@app.route('/repeat/<name>/<int:num>')
def repeat(name,num):
    return name*num
    

if __name__ == "__main__":
    app.run(debug=True)