from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/edit", methods=["POST","GET"])
def edit():
    if request.method == "POST":
        return "your request is here"
    
    return render_template("index.html")

app.run(debug=True,port=5001)