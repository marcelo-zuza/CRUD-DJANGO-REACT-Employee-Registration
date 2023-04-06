from django.db import models


class Base(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)


class Employee(Base):
    name = models.CharField('Name', max_length=300)
    age = models.CharField('Age', max_length=3)
    job = models.CharField('Job', max_length=50)

    def __str__(self):
        return self.name
