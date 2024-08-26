from rest_framework import serializers
from .models import Paper, Feedback
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class PaperSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Paper
        fields = ['id', 'title', 'description', 'link', 'user']

class FeedbackSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    paper = serializers.PrimaryKeyRelatedField(queryset=Paper.objects.all())

    class Meta:
        model = Feedback
        fields = ['id', 'comment', 'rating', 'paper', 'user']
