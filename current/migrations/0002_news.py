# Generated by Django 3.0.3 on 2020-02-28 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('current', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('title', models.TextField(max_length=100)),
            ],
        ),
    ]
