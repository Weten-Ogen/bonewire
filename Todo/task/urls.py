from django.urls import path
from . import views

app_name='task'
urlpatterns = [ 
    path('',views.index ,name='index'),
    path('updatetask/<str:pk>/',views.updatetask, name='updatetask'),
    path('delete/<str:pk>/',views.deletetask, name='deletetask'),
]