import random
from flask import Flask, render_template, request, session, redirect, url_for
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'ninja_gold_secret_key'

# Root route to display the game
@app.route('/')
def index():
    # Initialize game state if not exists
    if 'gold' not in session:
        session['gold'] = 0
    if 'moves' not in session:
        session['moves'] = 0
    if 'activities' not in session:
        session['activities'] = []
    return render_template('index.html', gold=session['gold'], activities=session['activities'], moves=session['moves'])

building_ranges = {
    "farm": (10, 20),
    "cave": (5, 15),
    "house": (2, 5),
    "casino": (-50, 50)
}

# Processing route for gold buttons
@app.route('/process_money', methods=['POST'])
def process():
    # Get the building name from the hidden input
    building = request.form.get('building')
    
    if building in building_ranges:
        # Calculate random gold
        min_val = building_ranges[building][0]
        max_val = building_ranges[building][1]
        gold = random.randint(min_val, max_val)
        
        # Update session data
        session['gold'] += gold
        session['moves'] += 1
        
        # Format the current time
        now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Logic for colors and messages
        if gold < 0:
            msg = f"Lost {abs(gold)} gold from the {building}! ({now})"
            color = "text-red-600"
        else:
            msg = f"Earned {gold} gold from the {building}! ({now})"
            
            if building == "farm":
                color = "text-green-600"
            elif building == "cave":
                color = "text-blue-600"
            elif building == "house":
                color = "text-purple-600"
            elif building == "casino":
                color = "text-red-600"
            else:
                color = "text-green-600"
                
        # Create activity and insert at the top (Sensei Bonus)
        new_activity = {'message': msg, 'color': color}
        session['activities'].insert(0, new_activity)
        
        # Notify Flask that the list in the session has changed
        session.modified = True
            
    return redirect('/')

# Separate route for the Reset button
@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)