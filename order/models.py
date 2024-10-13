from django.db import models
from user.models import User, Timestamp


class Service(Timestamp):
    name = models.CharField(max_length=200)
    notes = models.TextField(default='')
    is_active = models.BooleanField(default=True)
    icon = models.ImageField(default='service/%m/%y', blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.name
