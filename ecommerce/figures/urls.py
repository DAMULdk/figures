from django.urls import path
from . import views

urlpatterns = {
    path('', views.menu, name="menu"),
    path('menu/', views.menu, name="menu"),
    path('square/', views.square, name="square"),
    path('triangle/', views.triangle, name="triangle"),
    path('circle/', views.circle, name="circle"),
    path('rectangle/', views.rectangle, name="rectangle"),
    path('cube/', views.cube, name="cube"),
    path('sphere/', views.sphere, name="sphere"),
    path('prism/', views.prism, name="prism"),
    path('tesseract/', views.tesseract, name="tesseract"),
    path('human/', views.human, name="human"),
}
