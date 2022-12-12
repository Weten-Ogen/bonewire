from django.urls import path
from . import views

# Django urls patterns list
app_name = 'base'
urlpatterns  = [
    path('', views.index, name='index'),
]