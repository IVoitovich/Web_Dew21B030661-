from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('api/products',views.products),
    path('api/products/<int:id>/', views.products_id,name='user'),
    path('api/categories/',views.categor),
    path('api/categories/<int:id>/', views.categor_id,name='user'),
    path('api/categories/<int:id>/products/', views.categor_pr_id,name='user'),
]