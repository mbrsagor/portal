from django import forms
from order.models import Order



class OrderModelForm(forms.ModelForm):
    class Meta:
        model = Order
        read_only_fields = ('user',)
        fields = (
                'job_title', 'service', 'quantity', 'work_process', 
                'download_link', 'instruction'
            )
        widgets = {
            'service': forms.Select(attrs={'class': 'form-select', 'id':'service'}),
            'work_process': forms.Select(attrs={'class': 'form-select', 'id':'work_process'}),
            'quantity': forms.NumberInput(attrs={'class': 'form-control', 'id': 'quantity'}),
            'download_link': forms.URLInput(attrs={'class': 'form-control', 'id': 'download_link', 'placeholder': 'Download link'}),
            'job_title': forms.TextInput(attrs={'class': 'form-control', 'id': 'job_title', 'placeholder': 'Enter job title'}),
            'instruction': forms.Textarea(attrs={'class': 'form-control', 'id': 'instruction', 'placeholder': 'Add instructions (optional)'}),
        }
