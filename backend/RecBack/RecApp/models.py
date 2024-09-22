from django.db import models


# Create your models here.
class Categories(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class Recipes(models.Model):
    name = models.CharField(max_length=128)
    cooking = models.TextField()
    categories = models.ManyToManyField(Categories)

    def __str__(self):
        return self.name

