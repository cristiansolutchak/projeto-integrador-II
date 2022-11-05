from flask import Flask, render_template, request
from module.database import Database

app = Flask(__name__, template_folder='template', static_folder='static')
app.secret_key ="çorht8p5y0a39osmdk"
db = Database('pi')

@app.route("/")
def index():
    if len(request.args) != 0:
        db.salvar(request.args)
    return render_template('index.html')


if __name__ == "__main__":
    app.run(port=5000, debug=True)