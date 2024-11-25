from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from apps.users.serializers import UserSerializer
from .models import NotesModel,DailyTask,ProjectTaskModel,ProjectModel

class NotesSerializers(ModelSerializer):
    owner =  UserSerializer(read_only=True)

    class Meta:
        model = NotesModel
        fields = ('id', 'text', 'title', 'color', 'owner', 'created_at')

  


class DaylikSerializers(ModelSerializer):
    owner =  UserSerializer(read_only=True)

    class Meta:
        model = DailyTask
        fields = ('id', 'text', 'status',  'owner', 'created_at')

    

class ProjectTaskSerializer(ModelSerializer):
    
    class Meta:
        model = ProjectTaskModel
        fields = ['id', 'text', 'status']  

class ProjectSerializer(ModelSerializer):
    project_task = ProjectTaskSerializer(many=True, read_only=True)
    owner =  UserSerializer(read_only=True)

    class Meta:
        model = ProjectModel
        fields = ['id', 'owner', 'title', 'status', 'description', 'project_task', 'created_at']  



class ProjectTaskListSerializer(ModelSerializer):
    
    class Meta:
        model = ProjectTaskModel
        fields = ['id', 'text', 'status','project_id']  