from django.urls import path
from .views import dashboard_view

urlpatterns = [
    # Dashboard
    path('', dashboard_view.DashboardView.as_view(), name='dashboard'),
    path('dashboard/', dashboard_view.DashboardView.as_view(), name='dashboard'),
]
