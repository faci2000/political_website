from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('info.urls')),
    path('articles/',include('articles.urls')),
    path('current/', include('current.urls')),

]
