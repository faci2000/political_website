from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('tinymce/', include('tinymce.urls')),
    path('', include('info.urls')),
    path('articles/',include('articles.urls')),
    path('current/', include('current.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)