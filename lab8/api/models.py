from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255,default='jopa')

class Product(models.Model):
    name = models.CharField(max_length=255,default='jopa')
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active=models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)