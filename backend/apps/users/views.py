import os

import requests
from django.http import Http404
from rest_framework import status
from rest_framework.generics import (
    CreateAPIView,
    GenericAPIView,
    ListAPIView,
    ListCreateAPIView,
    RetrieveAPIView,
    RetrieveUpdateDestroyAPIView,
    UpdateAPIView,
)
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.users.serializers import (
    ProfileSerializer,
    UserModelFunction,
    UserSerializer,
    UserUpdateSerializer,
)


class CreateUser(CreateAPIView):
    serializer_class = UserSerializer
    # permission_classes = (AllowAny,)




class UpdateProfileUser(UpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = (AllowAny,)
    http_method_names = ("patch",)

    def get_object(self):
        user = UserModelFunction.objects.filter(
            profile__isnull=False, pk=self.request.user.pk
        ).first()
        if user:
            return user.profile
        else:
            raise Http404




class GetMeUser(RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def get_object(self):
        return UserModelFunction.objects.get(pk=self.request.user.pk)


