from django.contrib import admin
from .models import *
class Admin(admin.ModelAdmin):
    list_display=("name","pk","salary")

admin.site.register(Company)
admin.site.register(Vacancy)
