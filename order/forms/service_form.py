from django import forms
from order.models import Service


class ServiceModelForm(forms.ModelForm):
    class Meta:
        model = Service
        fields = ('name', 'notes', 'is_active', 'icon', 'price')
        widgets = {
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input', 'id': 'is_active'}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'id': 'name', 'placeholder': 'Enter service name'}),
            'notes': forms.Textarea(attrs={'class': 'form-control', 'id': 'notes', 'placeholder': 'Enter service short description', 'rows': 6}),
            'price': forms.NumberInput(attrs={'class': 'form-control', 'id': 'price'}),
            'icon': forms.FileInput(attrs={'class': 'form-control', 'id': 'icon'}),
        }
        
