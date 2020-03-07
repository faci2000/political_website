from django.conf.urls import url, include
from django.views.generic import ListView, DetailView
from articles.models import Article

urlpatterns = [ 
                url(r'^$', ListView.as_view(
                                    queryset=Article.objects.all().order_by("-date"),
                                    template_name="articles/articles_list.html")),
                url(r'^(?P<pk>\d+)$', DetailView.as_view(
                                    model = Article,
                                    template_name="articles/article.html")),
            ]