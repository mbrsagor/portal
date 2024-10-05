from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser

from utils.enums import UserTypes
from user.manager import UserManager


class DomainEntity(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        abstract = True


class User(AbstractUser, DomainEntity):
    username = None
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=200, unique=True)
    phone = models.CharField(max_length=15, unique=True)
    role = models.IntegerField(choices=UserTypes.get_choices(), default=UserTypes.USER.value)
    

    def __str__(self):
        return self.name

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "phone"]

    objects = UserManager()


class Profile(DomainEntity):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    company_name = models.CharField(max_length=200, blank=True, null=True, default="")
    street = models.CharField(max_length=200, blank=True, null=True, default="")
    city = models.CharField(max_length=200, blank=True, null=True, default="")
    state = models.CharField(max_length=200, blank=True, null=True, default="")
    zip_code = models.IntegerField(blank=True, null=True, default=1230)
    avatar = models.ImageField(upload_to="profile/%m/%d", blank=True, null=True)

    def __str__(self):
        return self.user.name


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        profile, created = Profile.objects.get_or_create(user=instance)
        return profile


post_save.connect(create_user_profile, sender=User)
