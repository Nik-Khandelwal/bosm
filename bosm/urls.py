from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from sportzilla.views import *
from django.conf.urls.static import static
from django.contrib.auth import views

urlpatterns = [
    url(r'^$', main, name='main'),
    url(r'^admin/', admin.site.urls),
    url(r'^accounts/', include('social_django.urls')),
    url(r'^accounts/profile/', include('sportzilla.urls')),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^login/$', views.login, name='login'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
