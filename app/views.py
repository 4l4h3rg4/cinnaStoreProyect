from django.shortcuts import render
from django.contrib.auth import authenticate

def index(request):
    if request.method == 'POST':
        print("post")
        print(request.POST)
        username = request.POST.get('username')
        print('username:', username)
        password = request.POST.get('password')
        print('password:', password)
        user = authenticate(request, username=username, password=password)
        print('user:', user)
    else:
        print("get")
    return render(request, 'index.html')

def catalog(request):
    return render(request, 'catalog.html')
