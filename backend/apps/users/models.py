from datetime import datetime, timedelta

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core import validators
from django.db import models

from apps.users.manager import UserManager
from core.enum.validate import ValidateUser as valid
from core.models import CoreModel


class ProfileModel(CoreModel):
    class Meta:
        db_table = "profile_users"

    name = models.CharField(
        max_length=25, validators=[validators.RegexValidator(*valid.NAME_SURNAME.value)]
    )
    surname = models.CharField(
        max_length=25, validators=[validators.RegexValidator(*valid.NAME_SURNAME.value)]
    )
    bio = models.TextField(blank=True, null=True)
    age = models.IntegerField(blank=True, null=True,
        validators=[validators.MinValueValidator(18), validators.MaxValueValidator(90)]
    )
    avatar = models.ImageField(upload_to="image/", blank=True)





class UserModel(AbstractBaseUser, PermissionsMixin, CoreModel):
    class Meta:
        db_table = "auth_users"

    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    # type_account
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    # profile
    profile = models.OneToOneField(
        ProfileModel, on_delete=models.SET_NULL, null=True, related_name="user"
    )
    # account
  

    # settings model
    USERNAME_FIELD = "email"
    objects = UserManager()