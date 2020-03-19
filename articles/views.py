from django.shortcuts import render
from .models import Article,ArticleImage 
from django.views.generic import DetailView,TemplateView
from .forms import ArticleFormSet,ArticleForm

class ArticleDetailView(DetailView):
    model = Article
    template_name='articles/article.html'

    def get_context_data(self, **kwargs):
        context = super(ArticleDetailView,self).get_context_data(**kwargs)
        return context

class ArticlesView(TemplateView):
    template_name = 'articles/articles_list.html'

    def get_context_data(self,**kwargs):
        context=super().get_context_data(**kwargs)
        context['articles']=Article.objects.order_by('-date')
        # context['images']=ArticleImage.objects
        return context
