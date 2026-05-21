from django.shortcuts import render, redirect
from .models import Users

def index(request):
    users = Users.objects.all()  # get all users from DB
    return render(request, "Users_with_Templates/index.html", {
        "users": users
    })

def submitUser(request):
    if request.method == "POST":

        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        gender = request.POST.get('gender')
        age = request.POST.get('age')

        # SAVE TO DATABASE
        Users.objects.create(
            first_name=firstname,
            last_name=lastname,
            email=email,
            phone=phone,
            gender=gender,
            age=age
        )
    return redirect('index')