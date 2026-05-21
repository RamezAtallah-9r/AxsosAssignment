from django.shortcuts import render, redirect
import random

def index(request):
    request.session.setdefault("gold", 0)
    request.session.setdefault("messages", [])
    
    return render(request, "dojo_gold/index.html", {
        "gold": request.session["gold"],
        "messages": request.session["messages"]
    })


def count(request):
    if request.method == "POST":

        request.session.setdefault("gold", 0)
        request.session.setdefault("messages", [])

        place = request.POST.get("place")

        if place == "House":
            earned = random.randint(5, 10)
            request.session["gold"] += earned
            msg = f"You earned {earned} gold from the House 🏠"

        elif place == "Farm":
            earned = random.randint(10, 20)
            request.session["gold"] += earned
            msg = f"You earned {earned} gold from the Farm 🌾"

        elif place == "Mine":
            earned = random.randint(20, 30)
            request.session["gold"] += earned
            msg = f"You earned {earned} gold from the Mine ⛏"

        elif place == "Casino":
            earned = random.randint(-50, 50)
            request.session["gold"] += earned

            if earned >= 0:
                msg = f"You WON {earned} gold at the Casino 🎰"
            else:
                msg = f"You LOST {abs(earned)} gold at the Casino 🎰"

        else:
            msg = "Invalid action"

        # ✅ store history (IMPORTANT FIX)
        request.session["messages"].append({"text": msg,"place": place})
        request.session.modified = True

    return redirect("/dojo_gold/")