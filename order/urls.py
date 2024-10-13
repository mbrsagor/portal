from django.urls import path
from .views import dashboard_view, service_view

urlpatterns = [
    # Dashboard
    path('', dashboard_view.DashboardView.as_view(), name='dashboard'),
    path('dashboard/', dashboard_view.DashboardView.as_view(), name='dashboard'),
    # Services
    path('create-service/', service_view.ServiceCreateView.as_view(), name='create_service'),
]
