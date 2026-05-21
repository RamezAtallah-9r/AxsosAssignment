import random
from django.shortcuts import render, redirect

def index(request):
    # Initialize the target number if it does not exist yet
    if 'num' not in request.session:
        request.session['num'] = random.randint(0, 100)
    return render(request, "guss_number/index.html")

def check(request):
    if request.method == 'POST':
        raw_number = request.POST.get('number')

        # Prevent crashes if the user submits an empty field
        if not raw_number:
            request.session['msg'] = "Please enter a valid number!"
            request.session['color'] = 'bg-yellow-400'
            return redirect('/guss_number/')  # Change to your actual index URL name

        #  Convert the string input to an integer
        number = int(raw_number)
        target = request.session['num']

        # Core evaluation logic
        if number == target:
            request.session['msg'] = "Winner Winner Chicken Dinner!"
            request.session['color'] = 'bg-green-400'
            # Reset the number so they can play again next round
            del request.session['num']
        elif number > target:
            request.session['msg'] = f"Try a lower number than {number}"
            request.session['color'] = 'bg-red-400'
        else:
            request.session['msg'] = f"Try a higher number than {number}"
            request.session['color'] = 'bg-blue-400'

    #  Return a response redirecting back to the game page
    return redirect('/guss_number/')  # Change to your actual index URL name
