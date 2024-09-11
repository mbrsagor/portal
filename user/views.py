from django.shortcuts import render, redirect

from .forms import CreateUserForm

# create a view here

def dashboard(request):
    return render(request, 'index.html')


def register(request):
    
    form = CreateUserForm()

    if request.method == 'POST':
          
        form = CreateUserForm(request.POST)

        if form.is_valid():

            form.save()

            return redirect('dashboard')
        
    context = {'form':form}


    return render(request, 'auth/register.html', context=context)