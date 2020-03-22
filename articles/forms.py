from django import forms
from .models import ArticleImage,Article
from django.forms.models import inlineformset_factory

class ArticleForm(forms.ModelForm):
    
    class Meta:
        model = ArticleImage
        exclude = ()

ArticleFormSet = inlineformset_factory(
    Article,ArticleImage,form=ArticleForm,
    fields=['image','ratio'],
    extra=1,can_delete=True)