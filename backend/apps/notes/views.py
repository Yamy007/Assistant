from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView,ListCreateAPIView
from .serializers import NotesSerializers, DaylikSerializers, ProjectSerializer, ProjectTaskSerializer, ProjectTaskListSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import NotesModel, DailyTask,ProjectModel, ProjectTaskModel
from django.db.models import Q

class CreateNotes(CreateAPIView):
    serializer_class = NotesSerializers
    permission_classes = (AllowAny,)
    queryset = NotesModel.objects.all()

    def post(self, *args, **kwargs):
        user = self.request.user
        data = self.request.data
        serializers = NotesSerializers(data=data)
        serializers.is_valid(raise_exception=True)
        serializers.save(owner=user)
        return Response(serializers.data, status=201)


class GetAllNote(ListAPIView):
    serializer_class = NotesSerializers
    permission_classes = (AllowAny,)
    queryset = NotesModel.objects.all()

    def get_queryset(self):
        user = self.request.user
        NotesModel.objects.filter(Q(title__isnull=True) | Q(title__exact=""), Q(text__isnull=True) | Q(text__exact="")).delete()
        return NotesModel.objects.filter(owner=user)


class UpdateRetrieveDestroyNotes(RetrieveUpdateDestroyAPIView):
    serializer_class = NotesSerializers
    queryset = NotesModel.objects.all()
    permission_classes = (AllowAny,)
    def get_object(self):
        pk = self.kwargs.get('pk')
        print(pk)
        note = NotesModel.objects.filter(id = pk).first()
        return note

    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)
    

class CreateDailyk(CreateAPIView):
    serializer_class = DaylikSerializers
    permission_classes = (AllowAny,)
    queryset = DailyTask.objects.all()

    def post(self, *args, **kwargs):
        user = self.request.user
        data = self.request.data
        serializers = DaylikSerializers(data=data)
        serializers.is_valid(raise_exception=True)
        serializers.save(owner=user)
        return Response(serializers.data, status=201)


class GetAllDaylik(ListAPIView):
    serializer_class = DaylikSerializers
    permission_classes = (AllowAny,)
    queryset = DailyTask.objects.all()

    def get_queryset(self):
        user = self.request.user
        DailyTask.objects.filter( Q(text__isnull=True) | Q(text__exact="")).delete()

        return DailyTask.objects.filter(owner=user)


class UpdateRetrieveDestroyDaylik(RetrieveUpdateDestroyAPIView):
    serializer_class = DaylikSerializers
    queryset = DailyTask.objects.all()
    permission_classes = (AllowAny,)
    def get_object(self):
        pk = self.kwargs.get('pk')
        note = DailyTask.objects.filter(id = pk).first()
        return note

    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)






class ProjectListCreateView(ListCreateAPIView):
    queryset = ProjectModel.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated, )
    def get_queryset(self):
        user = self.request.user
        ProjectModel.objects.filter( Q(title__isnull=True) | Q(status__exact="")).delete()
        return ProjectModel.objects.filter(owner=user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProjectRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = ProjectModel.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated, )

    def get_object(self):
        pk = self.kwargs.get('pk')
        note = ProjectModel.objects.filter(id = pk).first()
        return note



class ProjectTaskListCreateView(ListCreateAPIView):
    
    serializer_class = ProjectTaskSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        project_id = self.kwargs.get('pk')
        return ProjectTaskModel.objects.filter(project_id=project_id)

    def post(self, *args, **kwargs):
        project_id = self.kwargs.get('pk')
        project = ProjectModel.objects.get(pk = project_id)
        data = self.request.data
        serializers = ProjectTaskSerializer(data=data)
        serializers.is_valid(raise_exception=True)
        serializers.save(project=project)
        return Response(serializers.data, status=201)



class ProjectTaskListView(ListAPIView):
    
    serializer_class = ProjectTaskListSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return ProjectTaskModel.objects.all()


class ProjectTaskRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    
    queryset = ProjectTaskModel.objects.all()
    serializer_class = ProjectTaskSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        pk = self.kwargs.get('pk')
        note = ProjectTaskModel.objects.filter(id = pk).first()
        return note
