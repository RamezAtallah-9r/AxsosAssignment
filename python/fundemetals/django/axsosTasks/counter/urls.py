from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('count/', views.count, name='count'),
    path('destroy_session/', views.destroy_session, name='destroy_session'),
]