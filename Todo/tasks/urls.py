from django.urls import path
from . import views

app_name='task'
urlpatterns = [ 
    path('',views.index ,name='list'),
    path('update_task/<int:task_id>', views.updateTask, name='update_task'),
]