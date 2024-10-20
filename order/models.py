from django.db import models
from user.models import User, Timestamp

from utils.enums import Status


class Service(Timestamp):
    name = models.CharField(max_length=200)
    notes = models.TextField(default='')
    is_active = models.BooleanField(default=True)
    icon = models.ImageField(default='service/%m/%y', blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.name


class Workflow(Timestamp):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Preference(Timestamp):
    name = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class FileFormate(Timestamp):
    name = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Order(Timestamp):
    job_title = models.CharField(max_length=150)
    exit_meta_date = models.BooleanField(default=False)
    preference = models.ManyToManyField(Preference, related_name='orderPreference')
    file_formate = models.ManyToManyField(FileFormate, related_name='orderFileFormate')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orderBy')
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='orderService')
    work_process = models.ForeignKey(Workflow, on_delete=models.CASCADE, related_name='orderWord')
    status = models.IntegerField(choices=Status.get_status(), default=Status.PENDING.value)
    quantity = models.IntegerField(default=1)
    instruction = models.TextField(default='')
    download_link = models.URLField()

    def __str__(self):
        return self.service.name
    
    @property
    def get_user(self):
        return self.user.name

    @property
    def total_price(self):
        return self.quantity * self.service.price
