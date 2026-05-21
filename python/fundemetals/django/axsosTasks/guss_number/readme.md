# Guess The Number - Django Project

A simple Django game where the user tries to guess a random number between 0 and 100.

---

# Features

- Random number generation
- User input validation
- Session storage
- Win / lose messages
- Tailwind CSS simple styling

---

# Technologies Used

- Python
- Django
- HTML
- Tailwind CSS

---

# Project Structure

```bash
guss_number/
│
├── templates/
│   └── guss_number/
│       └── index.html
│
├── views.py
├── urls.py
└── ...
```

---

# Installation

## 1. Create Virtual Environment

```bash
python -m venv djangoPy3Env
```

---

## 2. Activate Virtual Environment

### Windows

```bash
djangoPy3Env\Scripts\activate
```

### Mac / Linux

```bash
source djangoPy3Env/bin/activate
```

---

## 3. Install Django

```bash
pip install django
```

---

# Run The Project

## 1. Go To Project Folder

```bash
cd axsosTasks
```

---

## 2. Run Server

```bash
python manage.py runserver
```

---

# Open In Browser

```bash
http://127.0.0.1:8000/guss_number/
```

---

# URLs

| URL | Description |
|-----|-------------|
| `/guss_number/` | Home page |
| `/guss_number/check` | Check guessed number |

---

# How The Game Works

1. Django creates a random number between 0 and 100.
2. User enters a number.
3. The app checks:
   - Higher than target
   - Lower than target
   - Correct number
4. A message is shown to the user.

---

# Working With Sessions

## Create Session

```python
request.session['num'] = random.randint(0, 100)
```

---

## Get Session Data

```python
target = request.session['num']
```

---

## Update Session Data

```python
request.session['msg'] = "Winner Winner Chicken Dinner!"
```

---

## Delete Session Data

```python
del request.session['num']
```

---

# Passing Session Data To HTML

## Save Data In Session

```python
request.session['color'] = 'bg-green-400'
```

---

## Access Session Data In HTML

```html
<h1>{{ request.session.msg }}</h1>

<div class="{{ request.session.color }}">
    Result
</div>
```

---

# Getting Data From Forms

## HTML Form

```html
<form action="/guss_number/check" method="post">
    {% csrf_token %}

    <input type="number" name="number">

    <button type="submit">
        Check
    </button>
</form>
```

---

## Get Form Data In views.py

```python
number = request.POST.get('number')
```

---

# Example Session Data

```python
request.session['num']
request.session['msg']
request.session['color']
```

---

# Example Redirect

```python
return redirect('/guss_number/')
```

---

# Example URLs

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('check', views.check),
]
```

---

# Author

Built using Django and Tailwind CSS.