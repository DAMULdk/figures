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

def circle(request):
    context = {}
    return render(request, 'figures/circle.html', context)

def rectangle(request):
    context = {}
    return render(request, 'figures/rectangle.html', context)

def cube(request):
    context = {}
    return render(request, 'figures/cube.html', context)

def sphere(request):
    context = {}
    return render(request, 'figures/sphere.html', context)

def prism(request):
    context = {}
    return render(request, 'figures/prism.html', context)

def tesseract(request):
    context = {}
    return render(request, 'figures/tesseract.html', context)

def human(request):
    context = {}
    return render(request, 'figures/human.html', context)