"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path

from config.settings import MEDIA_ROOT, MEDIA_URL
urlpatterns = [
    path("", include("core.swagger.swagger")),  # swagger
    path('auth/', include('apps.auth.urls')),
    path('user/', include('apps.users.urls')),
    path('note/', include('apps.notes.urls')),
    # path('products/', include('apps.products.urls')),
    # path('ecommerce/', include('apps.ecommerce.urls')),
    # path('finance/', include('apps.finance.urls')),
]
urlpatterns += static(MEDIA_URL, document_root=settings.MEDIA_ROOT)