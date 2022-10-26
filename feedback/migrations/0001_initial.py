# Generated by Django 4.0.1 on 2022-09-28 23:39

import ckeditor.fields
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerFeedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='تاریخ ویرایش')),
                ('published_at', models.DateTimeField(default=django.utils.timezone.now, verbose_name='تاریخ انتشار')),
                ('title', models.CharField(help_text='متن منحصر به فرد باید باشد', max_length=128, unique_for_month='published_at', verbose_name='متن')),
                ('slug', models.CharField(max_length=128, unique_for_month='published_at', verbose_name='اسلاگ')),
                ('status', models.PositiveSmallIntegerField(choices=[(0, 'Draft'), (1, 'Published')], default=1, verbose_name='وضعیت')),
                ('first_name', models.CharField(max_length=128, verbose_name='نام')),
                ('last_name', models.CharField(max_length=128, verbose_name='نام خانوادگی')),
                ('summary', models.CharField(max_length=128, verbose_name='خلاصه')),
                ('banner', models.ImageField(blank=True, null=True, upload_to='blog/%Y/%m/%d', verbose_name='تصویر')),
                ('content', ckeditor.fields.RichTextField(blank=True, null=True, verbose_name='پیام')),
            ],
            options={
                'verbose_name': 'فیدبک',
                'verbose_name_plural': 'فیدبکها',
                'ordering': ['-published_at', 'title'],
                'get_latest_by': ['-published_at'],
            },
        ),
    ]
