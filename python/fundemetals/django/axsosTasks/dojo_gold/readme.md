# ⚔ Dojo Gold (Django Game Project)

A simple Django session-based game where users collect gold from different locations (House, Farm, Mine, Casino) and track their activity history.

---

# 🚀 Project Setup

## 1. Create Virtual Environment

```bash
python -m venv env

. Activate Environment
Windows:
env\Scripts\activate
Mac / Linux:
source env/bin/activate
3. Install Django
pip install django
4. Create Project
django-admin startproject dojo_gold_project
cd dojo_gold_project
5. Create App
python manage.py startapp dojo_gold
6. Run Server
python manage.py runserver
📁 Project Structure
dojo_gold_project/
│
├── dojo_gold/
│   ├── views.py
│   ├── urls.py
│   ├── templates/
│       └── counter/
│           └── index.html
│
├── dojo_gold_project/
│   ├── settings.py
│   ├── urls.py
🌐 URLs (Routing)
project urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('dojo_gold.urls')),
]
app urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('count/', views.count, name="count"),
    path('destroy_session/', views.destroy_session, name="destroy_session"),
]
🧠 Views Logic
1. Index View (Main Page)
def index(request):
    request.session.setdefault("gold", 0)
    request.session.setdefault("messages", [])

    return render(request, "counter/index.html", {
        "gold": request.session["gold"],
        "messages": request.session["messages"]
    })
Purpose:
Display current gold
Show activity log
Initialize session values
2. Count View (Game Logic)
import random

def count(request):
    if request.method == "POST":

        place = request.POST.get("place")

        if place == "House":
            earned = random.randint(5, 10)

        elif place == "Farm":
            earned = random.randint(10, 20)

        elif place == "Mine":
            earned = random.randint(20, 30)

        elif place == "Casino":
            earned = random.randint(-50, 50)

        request.session["gold"] += earned

        request.session["messages"].append({
            "place": place,
            "text": f"You earned {earned} gold from {place}"
        })

        request.session.modified = True

    return redirect("/")
Purpose:
Handle all game actions
Add or subtract gold
Store activity logs
3. Destroy Session (Reset Game)
def destroy_session(request):
    request.session.flush()
    return redirect("/")
Purpose:
Reset all progress
Start new game session
🎮 Game Features
✔ Locations
🏠 House → small reward (5–10)
🌾 Farm → medium reward (10–20)
⛏ Mine → high reward (20–30)
🎰 Casino → risk (−50 to +50)
✔ Session System
Stores gold in session
Stores visit tracking
Stores activity logs
✔ Activity Log
Shows all actions
Color-coded by location
✔ Reset System
Clears session completely
Restarts game
🎨 Frontend (Tailwind)
Responsive card UI
Game-style hover effects
Color-coded buttons per location
📌 Learning Goals

This project teaches:

Django sessions
POST form handling
Random logic in Python
URL routing
Template rendering
Basic game logic design
⚔ Future Improvements
Add leaderboard system
Add animations for gold changes
Add sound effects
Add login system
Save history in database instead of session

```

![Screenshot 2026-05-21 084410](C:\Users\HP\OneDrive\Pictures\Screenshots%201\Screenshot%202026-05-21%20084410.png)
