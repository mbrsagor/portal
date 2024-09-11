from typing import Any 
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from django import forms


class CreateUserForm(UserCreationForm):

    def __init__(self, *args, **kwargs):
        super(CreateUserForm, self).__init__(*args, **kwargs)

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
