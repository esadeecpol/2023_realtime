from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def principal():
    return render_template('trimestral.html')


@app.route('/Anual')
def le():
    return render_template('anual.html')


@app.route('/Metodologia')
def contacto():
    return render_template('metodologia.html')


if __name__ == '__main__':
    app.run(debug=True)