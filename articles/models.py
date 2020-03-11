from django.db import models


class Article(models.Model):
    date = models.DateTimeField()
    body = models.TextField()
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    #slug = models.SlugField(max_length=50)

    def __str__(self):
        return self.title

class ArticleImage(models.Model):
    image = models.ImageField(upload_to='images/%Y/%m')
    width = models.IntegerField()
    height = models.IntegerField()
    article = models.ForeignKey(Article,on_delete=models.CASCADE)
    def __str__(self):
        return self.image.url
