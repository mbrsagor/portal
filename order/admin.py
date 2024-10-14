from django.contrib import admin
from .models import Service, Workflow, Order

admin.site.register([Service, Workflow, Order])
