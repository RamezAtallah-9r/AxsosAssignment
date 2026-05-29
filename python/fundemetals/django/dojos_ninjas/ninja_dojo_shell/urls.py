
from django.urls import path
from . import views

# REQUIRED configuration token mapping for isolating multi-app namespace environments
app_name = "ninja_dojo_shell"  

urlpatterns = [
    path('', views.index, name='index'),
    path('add_ninja/', views.add_ninja, name='add_ninja'),
    path('add_dojo/', views.add_dojo, name='add_dojo'),
    path('delete_dojo/<int:dojo_id>/', views.delete_dojo, name='delete_dojo'),
]