from django.conf.urls import url, include
from .import views


app_name = 'Qrious'

urlpatterns = [

    url(r'^$', views.main, name='main'),
    url(r'^(?P<number>[0-9]+)/$', views.detail, name='detail'),
    url(r'^(?P<number>[0-9]+)/answer/$', views.answer, name='answer'),
    url(r'^(?P<number>[0-9]+)/skip/$', views.skip, name='skip'),
    url(r'^(?P<number>[0-9]+)/leave/$', views.leave, name='leave'),
    url(r'^leaderboard/$', views.leaderboard, name='leaderboard'),
    url(r'^main/$', views.main, name='main'),

  ]
