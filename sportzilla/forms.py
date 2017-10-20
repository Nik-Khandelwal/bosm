from django import forms
from .models import *
from django.contrib.auth.models import User
from django import forms


class QSForm(forms.Form):
    answer = forms.CharField(max_length=50)

