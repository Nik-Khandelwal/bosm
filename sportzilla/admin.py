from django.contrib import admin
from django.contrib.admin import ModelAdmin

# Register your models here.

from .models import Question, CustomUser

# Register your models here.
admin.site.register(Question)
admin.site.register(CustomUser)
