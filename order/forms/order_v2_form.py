from django import forms

class MyForm(forms.Form):
    OPTIONS = [
        ('option1', 'Option 1'),
        ('option2', 'Option 2'),
        ('option3', 'Option 3'),
        ('option4', 'Option 4'),
    ]

    choices = forms.MultipleChoiceField(
        choices=OPTIONS,
        widget=forms.CheckboxSelectMultiple,
        required=True
    )

