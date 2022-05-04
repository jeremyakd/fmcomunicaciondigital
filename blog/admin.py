from django.contrib import admin
from .models import Blog

# Blog
class BlogAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    list_display = ('title','ordering')

admin.site.register(Blog, BlogAdmin)