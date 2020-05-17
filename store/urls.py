from django.urls import path 
from . import views 


from django.conf import settings
from django.conf.urls.static import static

app_name = 'store'

urlpatterns = [
    path("",views.store,name='store'),
    path("cart/",views.chart,name='cart'),
    path("checkout",views.checkout,name='checkout'),
    
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)