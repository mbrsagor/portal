from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from .models import User, Profile


class LoginForm(AuthenticationForm):
    """
    Name: Merchant login form
    """
    username = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Email valid email', 'required': True,
               'autofocus': True, 'type': 'email'}))
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={'class': 'form-control pe-5 password-input', 'placeholder': '************', 'required': True}))
    remember_me = forms.BooleanField(required=False,
                                     widget=forms.CheckboxInput(
                                         attrs={'class': 'form-check-input', 'id': 'remember-check'}))


class SingUpForm(UserCreationForm):
    """
    Name: general user signUp
    """

    def __init__(self, *args, **kwargs):
        super(SingUpForm, self).__init__(*args, **kwargs)
        self.fields.pop('password2')

    class Meta:
        model = User
        fields = (
            'name', 'email', 'phone', 'password1'
        )
    password1 = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Enter valid password'}))


class CreateUserByAdminForm(UserCreationForm):
    """
    User create by admin
    """

    def __init__(self, *args, **kwargs):
        super(CreateUserByAdminForm, self).__init__(*args, **kwargs)
        self.fields.pop('password2')

    class Meta:
        model = User
        fields = (
            'name', 'email', 'phone', 'role', 'is_active', 'password1'
        )


class UserUpdateForm(forms.ModelForm):
    """
    User update form
    """

    class Meta:
        model = User
        fields = ('name', 'email', 'phone', 'role', 'is_active')
        widgets = {
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input', 'id': 'is_active'}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'id': 'name'}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'id': 'email'}),
            'phone': forms.TextInput(attrs={'class': 'form-control', 'id': 'phone'}),
            'role': forms.Select(attrs={'class': 'form-select', 'id': 'role'}),
        }


class UserUpdateModelForm(forms.ModelForm):
    """
    User profile update form
    """
    class Meta:
        model = User
        fields = ('name', 'email', 'phone')
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'id': 'name'}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'id': 'email'}),
            'phone': forms.TextInput(attrs={'class': 'form-control', 'id': 'phone'}),
        }


class ProfileUpdateForm(forms.ModelForm):
    """
    Profile update form
    """

    class Meta:
        model = Profile
        read_only_fields = ('user',)
        fields = (
            'company_name', 'street', 'city',
            'state', 'zip_code', 'avatar'
        )
        widgets = {
            'company_name': forms.TextInput(
                attrs={'class': 'form-control', 'id': 'company_name', 'placeholder': 'Enter company name'}),
            'street': forms.TextInput(attrs={'class': 'form-control', 'id': 'street', 'placeholder': 'Enter street'}),
            'city': forms.TextInput(attrs={'class': 'form-control', 'id': 'city', 'placeholder': 'Enter city'}),
            'state': forms.TextInput(attrs={'class': 'form-control', 'id': 'state', 'placeholder': 'Enter state'}),
            'zip_code': forms.NumberInput(
                attrs={'class': 'form-control', 'id': 'zip_code', 'placeholder': 'Enter zip code'}),
            'avatar': forms.FileInput(attrs={'class': 'form-control', 'id': 'avatar'}),
        }
