# Generated by Django 4.2 on 2023-04-12 04:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='address',
            field=models.TextField(default='...'),
        ),
        migrations.AlterField(
            model_name='company',
            name='city',
            field=models.CharField(default='Almaty', max_length=255),
        ),
        migrations.AlterField(
            model_name='company',
            name='description',
            field=models.TextField(default='text'),
        ),
        migrations.AlterField(
            model_name='company',
            name='name',
            field=models.CharField(default='Company', max_length=255),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='description',
            field=models.TextField(default='text'),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='name',
            field=models.CharField(default='who are you?', max_length=255),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='salary',
            field=models.FloatField(default='salary'),
        ),
    ]