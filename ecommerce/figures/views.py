"""
Zadanie zaliczeniowe z Django
Imię i nazwisko ucznia: Damian Kwasigroch
Data wykonania zadania: 28.03.2024
Treść zadania: Aplikacja licząca powierzchnie i objętości różnych figur
Opis funkcjonalności aplikacji: Aplikacja umożliwia obliczanie właściwości różnych figur
"""

from django.shortcuts import render
from .models import Donation
from .payment import do_payment

def donate(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}

    if request.method == 'POST':
        name = request.POST.get('name')
        amount = request.POST.get('amount')
        hide_name = request.POST.get('hide_name')
        hide_amount = request.POST.get('hide_amount')
        if hide_amount == None:
            hide_amount = False
        else:
            hide_amount = True

        if hide_name == None:
            hide_name = False
        else:
            hide_name = True
        
        do_payment(amount) # TODO: Handle payment

        donation = Donation.objects.create(name=name, amount=amount, hide_name=hide_name, hide_amount=hide_amount)
        donation.save()

        return render(request, 'figures/thank_you.html', context)
    else:
        return render(request, 'figures/thank_you.html', context)
    
def donaters_table(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/donaters_table.html', context)

def thank_you(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'thank_you.html', context)

def menu(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/menu.html', context)

def square(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/square.html', context)

def triangle(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/triangle.html', context)

def circle(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/circle.html', context)

def rectangle(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/rectangle.html', context)

def cube(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/cube.html', context)

def sphere(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/sphere.html', context)

def prism(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/prism.html', context)

def tesseract(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/tesseract.html', context)

def human(request):
    donations = Donation.objects.all()
    context = {'donations': reversed(donations)}
    return render(request, 'figures/human.html', context)