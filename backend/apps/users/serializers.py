import django.db
from django.contrib.auth import get_user_model
from django.db.transaction import atomic
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from apps.users.models import ProfileModel
# from core.service.email_service import EmailService

UserModelFunction = get_user_model()


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        fields = ["id", "name", "surname", "bio", "age", "avatar"]
        read_only_fields = ("id",)



class UserUpdateSerializer(ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = UserModelFunction
        fields = (
            "id",
            "email",
            "is_staff",
            "is_active",
            "last_login",
            "profile",
        )
        read_only_fields = (
            "id",
            "email",
            "last_login",
            "profile",
            "account",
        )

    def validate(self, attrs):
        if attrs.get("is_staff") and attrs.get("is_block"):
            raise serializers.ValidationError("Staff cannot be block")
        return attrs


class UserSerializer(ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = UserModelFunction
        fields = (
            "id",
            "email",
            "password",
            "is_active",
            "is_staff",
            "is_superuser",
            "profile",
            "created_at",
            "updated_at",
            "last_login",
        )
        read_only_fields = (
            "id",
            "is_active",
            "is_block",
            "is_staff",
            "is_superuser",
            "last_login",
        )
        extra_kwargs = {
            "password": {
                "write_only": True,
            }
        }

    @atomic
    def create(self, validated_data):
        profile = validated_data.pop("profile")
        
        profile = ProfileModel.objects.create(**profile)
        user = UserModelFunction.objects.create_user(
            **validated_data, profile=profile, 
        )
        # EmailService.register_email(user) if not self.context.get("is_staff") else None
        return user


class ShortUserSerializer(ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = UserModelFunction
        fields = ("id", "email", "account", "profile")




class UserShowSerializer(ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = UserModelFunction
        fields = (
            "id",
            "email",
            "profile",
            "account",
        )