from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
from datetime import datetime

def index(request):
    now = datetime.now()
    
    # Store static date/time values at the moment of page load
    context = {
        'current_date': now.strftime('%d/%m/%Y'), # Output: DD/MM/YYYY
        'current_time': now.strftime('%H-%M-%S'), # Output: HH-MM-SS
    }
    return render(request, 'index.html', context)