from django.db import models

class NewsFeed(models.Model):
    date = models.DateTimeField()
    body = models.TextField()

    def __str__(self):
        return self.body

class News(models.Model):
    text = models.TextField()
    title = models.TextField(max_length=100)

