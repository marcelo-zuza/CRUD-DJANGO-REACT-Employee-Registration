# Generated by Django 4.2 on 2023-04-06 12:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Base',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('base_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api1.base')),
                ('name', models.CharField(max_length=300, verbose_name='Name')),
                ('age', models.CharField(max_length=3, verbose_name='Age')),
                ('job', models.CharField(max_length=50, verbose_name='Job')),
            ],
            bases=('api1.base',),
        ),
    ]