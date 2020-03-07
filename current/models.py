from django.db import models

class NewsFeed(models.Model):
    date = models.DateTimeField()
    body = models.TextField()

    def __str__(self):
        return self.body

