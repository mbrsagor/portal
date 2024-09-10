from django.shortcuts import render

# create a view here

def dashboard(request):
    return render(request, 'index.html')
