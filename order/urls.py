from django.urls import path
from .views import DashboardView

urlpatterns = [
    # Dashboard
    path('', DashboardView.as_view(), name='dashboard'),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
]
