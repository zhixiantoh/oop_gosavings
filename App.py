from flask import Flask, render_template


app = Flask(__name__)


@app.route('/s')
def home():
    return render_template('homepage.html')

@app.route('/salary')
def salary():
    return render_template('salaryinput.html')

@app.route('/travedupdate')
def travedu():
    return render_template('travedupdate.html')

@app.route('/overview')
def overview():
    return render_template('overview.html')

@app.route('/newuser')
def new():
    return render_template('newuser.html')

@app.route('/existinguser')
def existing ():
    return render_template('existing.html')



@app.route('/l')
def login():
    return render_template('login.html')

@app.route('/')
def range():
    return render_template('rangee.html')

@app.route('/lshome')
def lshome():
    return render_template('lshome.html')



@app.route('/piechart')
def piechart():
    return render_template('piechart.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/travel')
def travel():
    return render_template('travel.html')

@app.route('/welcome')
def welcome():
    return render_template('welcomepage.html')

@app.route('/afterupdate')
def afterupdate():
    return render_template('afterupdate.html')

@app.route('/history')
def history():
    return render_template('history.html')

if __name__ ==  '__main__':
    app.run()

