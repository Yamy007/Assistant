# Generated by Django 5.0.6 on 2024-11-24 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notesmodel',
            name='color',
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
    ]