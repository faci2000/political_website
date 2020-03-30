from django.shortcuts import render
from django.http import HttpResponse,HttpRequest


def about(HttpRequest):
    return render(HttpRequest, 'info/about.html')

def contact(HttpRequest):
    return render(HttpRequest, 'info/contact.html')
