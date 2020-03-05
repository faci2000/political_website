from django.shortcuts import render
from django.http import HttpResponse

def about(request):
    return HttpResponse("<h2>ABOUT</h2>")

def contact(request):
    return HttpResponse("<h2>CONTACT</h2>")

def home(request):
    return render(request, 'info/home.html')
