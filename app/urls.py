from django.urls import path
from . import views

app_name = 'app'

urlpatterns = [
    path('', views.index, name='index'),
    path('register', views.register, name='register'),
    path('catalog', views.catalog, name='catalog'),
    path('logout_view', views.logout_view, name='logout_view'),
]
