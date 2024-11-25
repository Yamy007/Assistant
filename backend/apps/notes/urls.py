from django.urls import path

from .views import (
   CreateNotes,
    UpdateRetrieveDestroyNotes,
    GetAllNote,
    CreateDailyk,
    GetAllDaylik,
    UpdateRetrieveDestroyDaylik,
    ProjectListCreateView,
    ProjectRetrieveUpdateDestroyView,
    ProjectTaskListCreateView,
    ProjectTaskRetrieveUpdateDestroyView,
    ProjectTaskListView
)

urlpatterns = [
    # create
    path("create", CreateNotes.as_view(), name="create_notes"),
    path("update/<int:pk>", UpdateRetrieveDestroyNotes.as_view(), name="update_notes"),
    path("list", GetAllNote.as_view(), name="list_note"),
 
    path("create/daylik", CreateDailyk.as_view(), name="create_notes"),
    path("update/<int:pk>/daylik", UpdateRetrieveDestroyDaylik.as_view(), name="update_notes"),
    path("list/daylik", GetAllDaylik.as_view(), name="list_note"),
 


    path("list/project/task", ProjectTaskListView.as_view(), name="create_notes"),
    path("create/project", ProjectListCreateView.as_view(), name="create_notes"),
    path("update/<int:pk>/project", ProjectRetrieveUpdateDestroyView.as_view(), name="update_notes"),
    path("create/task/<int:pk>/project", ProjectTaskListCreateView.as_view(), name="list_note"),
    path("update/<int:pk>/project/task", ProjectTaskRetrieveUpdateDestroyView.as_view(), name="update_notes"),


]