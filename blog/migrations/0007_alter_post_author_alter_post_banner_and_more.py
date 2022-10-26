# Generated by Django 4.0.1 on 2022-09-29 12:28

import ckeditor.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tag', '0001_initial'),
        ('blog', '0006_post_views'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='نویسنده'),
        ),
        migrations.AlterField(
            model_name='post',
            name='banner',
            field=models.ImageField(blank=True, null=True, upload_to='blog/%Y/%m/%d', verbose_name='تصویر'),
        ),
        migrations.AlterField(
            model_name='post',
            name='content',
            field=ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='پیام'),
        ),
        migrations.AlterField(
            model_name='post',
            name='subcategory',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='subcategory', to='category.subcategory', verbose_name='ساب کتگوری'),
        ),
        migrations.AlterField(
            model_name='post',
            name='summary',
            field=models.CharField(max_length=128, verbose_name='خلاصه'),
        ),
        migrations.AlterField(
            model_name='post',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='tags', to='tag.Tag', verbose_name='برچسب'),
        ),
    ]
