from urllib import response
from django.shortcuts import render, HttpResponse


def home(request):
    return render(request, 'core/index.html')