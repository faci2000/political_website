from django.conf.urls import  include
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views
 
urlpatterns = [ 
                # url(r'^$', ListView.as_view(
                #                     queryset=Article.objects.all().order_by("-date"),
                #                     template_name="articles/articles_list.html")),
                # url(r'^(?P<pk>\d+)$', DetailView.as_view(
                #                     model = Article,
                #                     template_name="articles/article.html")),
                path('', views.ArticlesView.as_view(), name='articles'),
                path('<int:pk>',views.ArticleDetailView.as_view(),name='articledetails')
            ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)