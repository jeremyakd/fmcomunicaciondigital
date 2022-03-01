from django.shortcuts import render


def blog_list(request):
    return render(request, "blog/blog-grid.html")


def blog_details(request):
    return render(request, "blog/blog-details-right-sidebar.html")