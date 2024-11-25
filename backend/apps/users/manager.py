import os
from datetime import datetime, timedelta


from django.contrib.auth import get_user_model
from django.contrib.auth.models import BaseUserManager
from django.http import Http404

from config.settings import LANGUAGE_CODE



class UserManager(BaseUserManager):
    def create_user(self, email, password, **kwargs):
        if not email:
            raise ValueError("Fields email must be required")
        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save()
        return user



    def create_superuser(self, email, password, **kwargs):
        kwargs.setdefault("is_superuser", True)
        kwargs.setdefault("is_staff", True)
        kwargs.setdefault("is_active", True)


        if not kwargs.get("is_superuser"):
            raise ValueError('Superuser must be True')
        if not kwargs.get("is_staff"):
            raise ValueError('Superuser staff must be True')
        if not kwargs.get("is_active"):
            raise ValueError('Superuser active must be True')

        user = self.create_user(email, password, **kwargs)
        return user

