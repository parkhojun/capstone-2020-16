# Generated by Django 2.2.10 on 2020-04-11 06:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('onepanman_api', '0020_groupinfo_leader'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinformationinproblem',
            name='playing',
            field=models.BooleanField(db_column='PLATING', default=False, verbose_name='게임 중'),
        ),
    ]
