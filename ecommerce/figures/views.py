from django.shortcuts import render

def menu(request):
    context = {}
    return render(request, 'figures/menu.html', context)

def square(request):
    context = {}
    return render(request, 'figures/square.html', context)

def triangle(request):
    context = {}
    return render(request, 'figures/triangle.html', context)

def cube(request):
    context = {}
    return render(request, 'figures/cube.html', context)