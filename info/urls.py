from . import views
from django.conf.urls import include
from django.urls import path
from django.views.generic import ListView, DetailView
from current.models import NewsFeed

urlpatterns = [
    #url('about/',views.about, name='about'),
    #url('contact/',views.contact, name='contact'),
    path('', ListView.as_view(
                                    queryset=NewsFeed.objects.all().order_by("-date")[:25],
                                    template_name="info/home.html")),
]