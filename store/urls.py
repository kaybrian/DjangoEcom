from django.urls import path 
from . import views 


app_name = 'store'

urlpatterns = [
    path("",views.store,name='store'),
    path("chart/",views.chart,name='chart'),
    path("checkout",views.checkout,name='checkout'),
    
]
