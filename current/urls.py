from django.conf.urls import  include
from django.views.generic import ListView, DetailView
from current.models import NewsFeed
from django.urls import path

urlpatterns = [ 
                path(r'^$', ListView.as_view(
                                    queryset=NewsFeed.objects.all().order_by("-date"),
                                    template_name="current/current.html")),
                path(r'^(?P<pk>\d+)$', DetailView.as_view(
                                    model = NewsFeed,
                                    template_name="current/newsfeed.html")),
            ]