from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse

def index(request):
    return render(request,"dojo_survey/index.html")

def result(request):
    if request.method=="POST":
        context={            
            'name': request.POST["name"],
            'location': request.POST["location"],
            'language': request.POST["language"],
            'comment': request.POST["comment"]
        }

    return render(request,"dojo_survey/display.html",context)