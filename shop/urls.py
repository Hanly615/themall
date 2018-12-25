# -*- coding: utf-8 -*-
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
app_name = 'shop'

urlpatterns = [
    path('', views.homePage, name='home_page'),
    path('search/', views.searchPage, name='search_page'),
    path('littleMan/', views.littleManPage, name='littleMan_page'),
    path('nearWear/', views.nearWearPage, name='nearWear_page'),
    path('startShopping/', views.startShopPage, name='start_page'),
    path('shop/', views.product_list, name='product_list'),
    path('shop/login/', auth_views.LoginView.as_view(), name='login'),
    path('shop/logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('<slug:category_slug>/', views.product_list, name='product_list_by_category'),
    path('<int:id>/<slug:slug>/', views.product_detail, name='product_detail'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)