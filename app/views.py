from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
from django.contrib.auth.models import User

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
        if user is not None:
            login(request, user)
    else:
        print("get")
    return render(request, 'index.html')

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if not User.objects.filter(username=username).exists():
            user = User.objects.create_user(username=username, email=username, password=password)
            user.save()
            login(request, user)
    return render(request, 'index.html')

def catalog(request):
    return render(request, 'catalog.html')

def logout_view(request):
    print("logout_view")
    logout(request)
    return HttpResponseRedirect(reverse('app:index'))
