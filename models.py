from django.db import models
from django.contrib.auth.models import User

class Paper(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.URLField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='papers')

    def __str__(self):
        return self.title

class Feedback(models.Model):
    paper = models.ForeignKey(Paper, on_delete=models.CASCADE, related_name='feedbacks')
    comment = models.TextField()
    rating = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='feedbacks')

    def __str__(self):
        return f'Feedback by {self.user.username} on {self.paper.title}'
