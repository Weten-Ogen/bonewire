from django.shortcuts import render,redirect
from .models import Task
from .forms import TaskForm 
# Create your views here.

def index(request):
    # Task Models and the Form entry
    tasks = Task.objects.all()
    form = TaskForm()
    # Redirect the user to the same page
    if request.method == "POST":
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
        # After submitting a new task and saving
        return redirect('/')
    context = {'tasks': tasks, 'form': form}
    return render(request, 'tasks/index.html',context)

def updateTask(request, task_id):
    task = Task.objects.GET(id=task_id)
    form = TaskForm(instance=task)
    context = {'form' : form}
    return (request,'tasks/update_task.html', context)
