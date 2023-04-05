from django.shortcuts import render
from .models import *
from django.http import JsonResponse

# Create your views here.
def products(request):
    data=list(Product.objects.values())
    return JsonResponse(data, safe=False)
def categor(request):
    data=list(Category.objects.values())
    return JsonResponse(data, safe=False)
def categor_id(request,id):
    data=list(Category.objects.values())
    return JsonResponse(data[id-1], safe=False)
def products_id(request,id):
    data=list(Product.objects.values())
    return JsonResponse(data[id-1], safe=False)
def categor_pr_id(request,id):
    data=list(Product.objects.filter(category_id=id).values())
    return JsonResponse(data, safe=False)