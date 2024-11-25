from django.db import models
from apps.users.models import UserModel
from core.models import CoreModel

class NotesModel(CoreModel):
    class Meta:
        db_table = 'notes'
    

    owner = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name='notes' )
    text = models.TextField(null=True, blank=True)
    title = models.TextField(null=True, blank=True)
    color = models.CharField(max_length=25, null=True, blank=True)



class DailyTask(CoreModel):
    class Meta:
        db_table = 'daylik'
    owner = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name='daylik' )
    text = models.TextField(null=True, blank=True)
    status = models.BooleanField(default=False)


    
class ProjectModel(CoreModel):
    class Meta:
        db_table = "project"
    
    
    owner = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name='project' )
    title = models.CharField(max_length=50, null=True, blank=True)
    status = models.CharField(max_length=25, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    

    
class ProjectTaskModel(CoreModel):
    class Meta:
        db_table = "project_task"
    text=models.CharField(max_length=25)
    status = models.BooleanField(default=False)
    project = models.ForeignKey(ProjectModel, on_delete=models.CASCADE, related_name='project_task')

