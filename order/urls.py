from django.urls import path
from .views import dashboard_view, service_view, order_view

urlpatterns = [
    # Dashboard
    path('', dashboard_view.DashboardView.as_view(), name='dashboard'),
    path('dashboard/', dashboard_view.DashboardView.as_view(), name='dashboard'),
    # Services
    path('services/', service_view.ServiceListView.as_view(), name='services'),
    path('create-service/', service_view.ServiceCreateView.as_view(), name='create_service'),
    path('service-update/<pk>/', service_view.ServiceUpdateView.as_view(), name='service_update'),
    path('service-delete/<pk>/', service_view.ServiceDeleteView.as_view(), name='service_delete'),
    # Orders
    path('create-order/', order_view.OrderCreateView.as_view(), name='create_order'),
]
