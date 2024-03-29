# Generated by Django 4.0.1 on 2023-01-09 20:04

from django.db import migrations, models

import painless.models.validations


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attachment',
            name='file',
            field=models.FileField(blank=True, max_length=1000, null=True, upload_to='tickets', validators=[painless.models.validations.validate_file_extension, painless.models.validations.validate_file_size], verbose_name='فایل'),
        ),
        migrations.AlterField(
            model_name='attachment',
            name='filename',
            field=models.CharField(blank=True, max_length=1000, null=True, validators=[painless.models.validations.validate_charachters], verbose_name='نام فایل'),
        ),
    ]
