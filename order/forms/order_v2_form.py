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



# Here, this constructor is basically called for remove password2 field
    def __init__(self, *args, **kwargs):
        super(SingUpForm, self).__init__(*args, **kwargs)
        self.fields.pop('password2')
        self.fields['host'].required = False  # Make the host field optional

