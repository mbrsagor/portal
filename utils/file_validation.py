import os
from django.core.exceptions import ValidationError


def validate_pdf_extension(value):
    ext = os.path.splitext(value.name)[1]  # [0] returns path & filename
    valid_extensions = ['.pdf']  # populate with the extensions that you allow / want
    if not ext.lower() in valid_extensions:
        raise ValidationError('Unsupported file extension!')


def validate_image_extension(value):
    ext = os.path.splitext(value.name)[1]  # [0] returns path & filename
    valid_extensions = ['.png', '.svg', '.jpeg']  # populate with the extensions that you allow / want
    if not ext.lower() in valid_extensions:
        raise ValidationError('Unsupported file extension!')

