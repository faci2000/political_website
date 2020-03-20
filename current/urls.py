from django.conf.urls import  include
from django.views.generic import ListView, DetailView
from current.models import NewsFeed
from django.urls import path

urlpatterns = [ 
                path('', ListView.as_view(
                                    queryset=NewsFeed.objects.all().order_by("-date")[:25],
                                    template_name="current/current.html")),
                path('<int:pk>', DetailView.as_view(
                                    model = NewsFeed,
                                    template_name="current/newsfeed.html")),
            ]