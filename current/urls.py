from django.conf.urls import url, include
from django.views.generic import ListView, DetailView
from current.models import NewsFeed

urlpatterns = [ 
                url(r'^$', ListView.as_view(
                                    queryset=NewsFeed.objects.all().order_by("-date")[:25],
                                    template_name="current/current.html")),
            ]