from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('trimestral.html')


@app.route('/Anual.html')
def anual():
    return render_template('anual.html')

@app.route('/Metodologia.html')
def metodologia():
    return render_template('metodologia.html')


freezer = Freezer(app)
if __name__ == '__main__':
    freezer.freeze()