from django.shortcuts import render
from .models import Blog


def blog_list(request):
    blog = Blog.objects.all()
    return render(request, "blog/blog-grid.html", {'blog':blog})

def blog_details(request):
    return render(request, "blog/blog-details-right-sidebar.html")