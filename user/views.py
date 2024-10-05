from django.urls import reverse
from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.views import View, generic
from django.shortcuts import resolve_url
from django_filters.views import FilterView
from django.shortcuts import redirect, render
from django.contrib.auth.views import LoginView
from django.template.loader import render_to_string
from django.utils.decorators import method_decorator
from django.contrib.auth.forms import PasswordChangeForm
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth.decorators import login_required
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib.auth import login, logout, update_session_auth_hash
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode

from user import forms
from .models import User
from utils.tokens import account_activation_token


class SignUpView(View):
    """
    Name: User signUP view
    URL: /user/signup/
    Method: POST
    """
    form_class = forms.SingUpForm
    template_name = 'auth/signup/signup.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False  # Deactivate account till it is confirmed
            user.save()

            current_site = get_current_site(request)
            subject = 'Activate Your MySite Account'
            message = render_to_string('auth/account_activation_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
            })
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.EMAIL_HOST_USER,
                html_message=message,
                recipient_list=[user.email]
            )
            messages.success(request, 'Please Confirm your email to complete registration.')
            return redirect('registration_done')
        return render(request, self.template_name, {'form': form})


class AccountCreateSuccessView(View):
    """
    Registration done show success page and instructions page
    """

    def get(self, reqeust, *args, **kwargs):
        template_name = 'auth/signup/registration_done.html'
        return render(reqeust, template_name)


class ActivateAccount(View):
    """
    After registration send mail and activate account.
    """

    def get(self, request, uidb64, token, *args, **kwargs):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and account_activation_token.check_token(user, token):
            user.is_active = True
            user.save()
            login(request, user)
            messages.success(request, 'Your account have been confirmed.')
            return redirect('signin')
        else:
            messages.warning(request, 'The confirmation link was invalid, possibly because it has already been used.')
            return redirect('signin')


class SignInView(LoginView):
    """
    Name: User SignIn view
    URL: /user/signin/
    :param
    email
    password
    """
    authentication_form = forms.LoginForm
    form_class = forms.LoginForm
    redirect_authenticated_user = False
    template_name = 'auth/signin/signin.html'

    def get_success_url(self):
        url = self.get_redirect_url()
        return url or resolve_url('/dashboard/')

    def form_valid(self, form):
        remember_me = form.cleaned_data['remember_me']
        login(self.request, form.get_user())

        if remember_me:
            self.request.session.set_expiry(1209600)
        return super(SignInView, self).form_valid(form)


class SignOutView(View):
    """
    Name: Logout view
    URL: signout/
    """

    def get(self, request):
        logout(request)
        return redirect('/user/signin/')


@login_required
def change_password(request):
    """
    Password Change
    :param request:
    :return:
    URL: user/password_change/
    """
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)
            messages.success(request, 'Your password was successfully updated!')
            return redirect('password_change')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordChangeForm(request.user)
    return render(request, 'auth/change_password.html', {
        'form': form
    })


@login_required
def profile_update_view(request):
    """
    Desc: User profile update view
    :param request:
    :return:
    """
    if request.method == 'POST':
        u_form = forms.UserUpdateModelForm(request.POST, instance=request.user)
        p_form = forms.ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, "Your profile updated successfully.")
            return redirect('profile')
        else:
            messages.error(request, "Something went to error.")
            return redirect('profile')
    else:
        u_form = forms.UserUpdateModelForm(instance=request.user)
        p_form = forms.ProfileUpdateForm(instance=request.user.profile)

    context = {
        'u_form': u_form,
        'p_form': p_form,
    }
    template_name = 'auth/profile/profile.html'
    return render(request, template_name, context)


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class AuthLockScreenView(LoginView):
    """
    Name: Auth lock screen login without username.
    :param
    password
    """
    template_name = 'auth/auth_lock_screen.html'
    authentication_form = forms.LoginForm
    form_class = forms.LoginForm
    redirect_authenticated_user = False

    def get_success_url(self):
        url = self.get_redirect_url()
        return url or resolve_url('/dashboard/')

    def form_valid(self, form):
        login(self.request, form.get_user())
        return super(AuthLockScreenView, self).form_valid(form)


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class SignOutScreenLockView(View):
    """
    Name: Lock screen view
    URL: user/lock-screen/
    """

    def get(self, request):
        currentpassword = request.user.password
        currentpassword.replace(request.user.password, '')
        return redirect('/user/auth-lock-screen/')


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class UserListView(FilterView, generic.ListView):
    """List of users with filter"""
    model = User
    paginate_by = 8
    context_object_name = 'users'
    template_name = 'users/users.html'
    filterset_fields = ['name', 'email', 'phone', 'role']


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class UserCreateByAdminView(SuccessMessageMixin, generic.CreateView):
    """
    User creating using CMS
    """
    model = User
    form_class = forms.CreateUserByAdminForm
    success_url = '/user/create-user/'
    success_message = 'User created successfully.'
    template_name = 'users/create_user.html'

    def form_valid(self, form):
        cd = form.cleaned_data
        email_to = cd['email']
        subject = "{0} Login credentials ".format(cd['email'])
        mes = "Welcome to PowurHouz new member! Please check below your login credentials for login in your account."
        message = f"{mes}\n\nEmail Address: {cd['email']}\nPassword: {cd['password1']}"
        send_mail(subject, message, settings.EMAIL_HOST, [email_to, ])
        return super().form_valid(form)


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class UserUpdateViewFormAdmin(SuccessMessageMixin, generic.UpdateView):
    """
    Super admin can update any user
    """
    model = User
    form_class = forms.UserUpdateForm
    success_message = 'User has been updated.'
    template_name = 'users/update_user.html'

    def get_success_url(self):
        return reverse('update_user', kwargs={'pk': self.object.id})


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class UserDeleteView(SuccessMessageMixin, generic.DeleteView):
    """
    User can delete from CMS
    """
    model = User
    success_url = '/user/users/'
    success_message = 'The use has been deleted.'
    template_name = 'common/delete_confirm.html'
