import random
from flask import Flask, render_template, session, redirect, url_for, request

app = Flask(__name__)
app.secret_key = 'super_secret_guess_key'

@app.route('/')
def index():
    # Initialize game state if not exists
    if 'target' not in session:
        session['target'] = random.randint(1, 100)
    if 'visits' not in session:
        session['visits'] = 0
    if 'attempts' not in session:
        session['attempts'] = 0
    
    session['visits'] += 1

    # Get feedback from session (set during the /process route)
    message = session.pop('message', 'Can you guess the number?')
    bg_color = session.pop('bg_color', 'bg-white')
    show_reset = session.pop('show_reset', False)

    return render_template("index.html", message=message, bg_color=bg_color, show_reset=show_reset)

@app.route('/process', methods=['POST'])
def process():
    action = request.form.get('action')
    
    # Handle Reset Button
    if action == 'reset':
        session.clear()
        return redirect(url_for('index'))

    # Handle Guess
    user_input = request.form.get('find')
    if user_input:
        guess = int(user_input)
        session['attempts'] += 1
        target = session['target']

        if guess > target:
            session['message'] = "Too High!"
            session['bg_color'] = "bg-red-500 text-white" # Red for high
        elif guess < target:
            session['message'] = "Too Low!"
            session['bg_color'] = "bg-blue-500 text-white" # Blue for low
        else:
            session['message'] = f"CORRECT! {target} was the number!"
            session['bg_color'] = "bg-green-500 text-white" # Green for win
            session['show_reset'] = True

    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True)