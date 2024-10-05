from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
    # Auth
    path('signin/', views.SignInView.as_view(), name='signin'),
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('signout/', views.SignOutView.as_view(), name='signout'),
    path('profile/', views.profile_update_view, name='profile'),
    path('password-change/', views.change_password, name='password_change'),
    path('activate/<uidb64>/<token>/', views.ActivateAccount.as_view(), name='activate'),
    path('registration-done/', views.AccountCreateSuccessView.as_view(), name='registration_done'),
    path('auth-lock-screen/', views.AuthLockScreenView.as_view(), name='auth_lock_screen'),
    path('logout-lock-screen/', views.SignOutScreenLockView.as_view(), name='logout_lock_screen'),
    # Rest or forgot password
    path('reset_password/', auth_views.PasswordResetView.as_view(template_name='auth/password_reset.html'),
         name='reset_password'),
    path('password_reset_done/',
         auth_views.PasswordResetDoneView.as_view(template_name='auth/password_reset_done.html'),
         name='password_reset_done'),
    path('user/reset/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(template_name='auth/set_password.html'),
         name='password_reset_confirm'),
    path('user/password_reset_complete/',
         auth_views.PasswordResetCompleteView.as_view(template_name='auth/password_reset_complete.html'),
         name='password_reset_complete'),
    # Users
    path('users/', views.UserListView.as_view(), name='users'),
    path('create-user/', views.UserCreateByAdminView.as_view(), name='create_user'),
    path('update-user/<pk>/', views.UserUpdateViewFormAdmin.as_view(), name='update_user'),
    path('user-delete/<pk>/', views.UserDeleteView.as_view(), name='user_delete'),
]
