# Generated by Django 4.2 on 2023-04-05 07:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_products_is_active'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='name',
        ),
    ]