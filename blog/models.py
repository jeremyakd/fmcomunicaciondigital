from django.db import models
from django.db.models import FloatField
from ckeditor.fields import RichTextField


class Category(models.Model):
    pass


class Tag(models.Model):
    pass


# TODO: author, title, subtitle, content, image, highlighted_phrase, date_published, date_updated
class Blog(models.Model):
    title = models.CharField(verbose_name="Titulo", blank=True, max_length=150)
    subtitle = models.CharField(verbose_name="Subtitulo", blank=True, max_length=150)
    date = models.DateTimeField(verbose_name="Fecha")
    description = RichTextField(verbose_name="Descripcion", blank=True, null=True)
    ordering = FloatField(verbose_name='Orden', default=0)
    link = models.URLField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')

    class Meta:
        verbose_name = "Blog"
        verbose_name_plural = "Blog"
        ordering = ['-ordering','created']
    
    def __str__(self):
        return self.title