# Generated by Django 5.0.2 on 2024-09-29 16:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CarManufacturer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=50, unique=True)),
                ('last_updated', models.DateTimeField(auto_now_add=True)),
                ('website', models.URLField(blank=True, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='CarModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('year', models.DateField(blank=True, null=True)),
                ('car_type', models.CharField(blank=True, max_length=10, null=True)),
                ('engine', models.CharField(blank=True, max_length=150, null=True)),
                ('horsepower', models.IntegerField(blank=True, null=True)),
                ('torque', models.IntegerField(blank=True, null=True)),
                ('fuel_economy', models.FloatField(blank=True, null=True)),
                ('safety_rating', models.FloatField(blank=True, null=True)),
                ('price', models.FloatField(blank=True, null=True)),
                ('manufacturer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Carmodel', to='caralize_cardata.carmanufacturer')),
            ],
        ),
        migrations.CreateModel(
            name='PriceHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('price', models.FloatField()),
                ('source', models.CharField(max_length=100)),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='caralize_cardata.carmodel')),
            ],
        ),
        migrations.CreateModel(
            name='SalesStatistics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('units_sold', models.IntegerField()),
                ('market_region', models.CharField(max_length=50)),
                ('average_price', models.FloatField()),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='caralize_cardata.carmodel')),
            ],
        ),
    ]
