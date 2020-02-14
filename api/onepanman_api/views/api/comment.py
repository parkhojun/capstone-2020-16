from rest_framework import viewsets

from onepanman_api.models import Comment
from onepanman_api.serializers.comment import CommentSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment
    serializer_class = CommentSerializer