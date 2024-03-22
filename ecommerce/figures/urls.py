from django.urls import path
from . import views

urlpatterns = {
    path('', views.menu, name="menu"),
    path('square/', views.square, name="square"),
    path('triangle/', views.triangle, name="triangle"),
    path('cube/', views.cube, name="cube"),
}
