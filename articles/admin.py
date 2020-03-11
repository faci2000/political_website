from django.contrib import admin
from articles.models import Article,ArticleImage
from tinymce.widgets import TinyMCE
from django.db import models

class ArticleAdmin(admin.ModelAdmin):

    fieldsets = [
        ("Title/date", {'fields': ["title", "date"]}),
        ("Content", {"fields": ["body"]}),
        ("Bottomline",{'fields':["author"]})
    ]

    formfield_overrides = {
            models.TextField: {'widget': TinyMCE()},
            }

admin.site.register(Article,ArticleAdmin)
admin.site.register(ArticleImage)
