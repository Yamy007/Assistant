from django.urls import path

from apps.users.views import (
   
    CreateUser,
    GetMeUser,
  
    UpdateProfileUser,
  
)

urlpatterns = [
    # create
    path("register", CreateUser.as_view(), name="register"),
    
    path("update/profile", UpdateProfileUser.as_view(), name="update_profile"),
 
    path("me", GetMeUser.as_view(), name="show_user_me"),
    # block

]