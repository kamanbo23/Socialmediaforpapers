from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, PaperViewSet, FeedbackViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'papers', PaperViewSet)
router.register(r'feedbacks', FeedbackViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
