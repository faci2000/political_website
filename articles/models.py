from django.db import models

class Article(models.Model):
    date = models.DateTimeField()
    body = models.TextField()
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    im

    def __str__(self):
        return self.body