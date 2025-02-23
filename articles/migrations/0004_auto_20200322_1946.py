# Generated by Django 2.2.10 on 2020-03-22 18:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_auto_20200311_1830'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='articleimage',
            name='height',
        ),
        migrations.RemoveField(
            model_name='articleimage',
            name='width',
        ),
        migrations.AddField(
            model_name='articleimage',
            name='ratio',
            field=models.CharField(choices=[('pionowe', 'pionowe'), ('poziome', 'poziome'), ('kwadrat', '1:1')], default='pionowe', max_length=7),
        ),
        migrations.AlterField(
            model_name='articleimage',
            name='article',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.Article'),
        ),
        migrations.AlterField(
            model_name='articleimage',
            name='image',
            field=models.ImageField(upload_to='images/%Y/%m'),
        ),
    ]
