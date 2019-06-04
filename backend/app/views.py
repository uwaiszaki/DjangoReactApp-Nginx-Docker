from django.shortcuts import render

# Create your views here.
from app.models import Question
from app.serializers import QuestionSerializer
from rest_framework import generics


class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    
