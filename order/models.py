from django.db import models
from user.models import User, Timestamp


class Service(Timestamp):
    name = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.name
