from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/persona1")
def persona1():
    return render_template("luis.html")

@app.route("/persona2")
def persona2():
    return render_template("jhenssen.html")

if __name__ == "__main__":
    app.run(debug=True)