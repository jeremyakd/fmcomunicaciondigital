from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog_list, name="blog"),
    path('details', views.blog_details, name="details"),

    # path('categories/<int:category_id>/', views.categories, name="categories"),
]
