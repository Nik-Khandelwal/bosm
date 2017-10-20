from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    score = models.IntegerField(default=0)
    rank = models.IntegerField(blank=True, null=True)
    question_no1 = models.IntegerField(default=1)
    question_no2 = models.IntegerField(default=1)
    question_no3 = models.IntegerField(default=1)
    question_no4 = models.IntegerField(default=1)
    question_no5 = models.IntegerField(default=1)
    answers_given = models.CharField(max_length=200, default="0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")

    def __str__(self):
        return self.username

class Question(models.Model):
    question_no = models.IntegerField()
    solution = models.CharField(max_length=50)
    marks = models.IntegerField(null=True)
    question_img = models.ImageField(blank=True)
    question = models.CharField(max_length=10000,default="")
    question_type = models.CharField(max_length=100,default="")

    def __str__(self):
        return str(self.question_no)+self.question_type #+ ' : ' + self.answer