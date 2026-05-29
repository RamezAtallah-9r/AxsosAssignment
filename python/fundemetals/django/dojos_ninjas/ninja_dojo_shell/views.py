from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.contrib import messages
from django.urls import reverse
from .models import *  # Explicit model imports are recommended in production paths
# Create your views here.
def index(request):
    context = {
        'dojos': get_all_dojos(),
        'ninjas': get_all_ninjas(),
    }
    return render(request, 'ninja_dojo_shell/index.html', context)

def add_dojo(request):
    if request.method == 'POST':
        name=request.POST.get('name')
        city=request.POST.get('city')
        state=request.POST.get('state')
        create_dojo(name, city, state)
    return redirect('ninja_dojo_shell:index')

def add_ninja(request):
    if request.method == 'POST':
        first_name=request.POST.get('first_name')
        last_name=request.POST.get('last_name')
        dojo_type=request.POST.get('dojo_type')
        dojo = get_object_or_404(Dojo, name=dojo_type)
        create_ninja(first_name, last_name, dojo)
    return redirect('ninja_dojo_shell:index')

def delete_dojo(request, dojo_id):
    if request.method == 'POST':
        delete_dojos(dojo_id)
    return redirect('ninja_dojo_shell:index')