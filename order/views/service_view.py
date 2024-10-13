from django.views import generic
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.contrib.messages.views import SuccessMessageMixin

from order.models import Service
from order.forms import service_form


@method_decorator(login_required(login_url="/user/signin/"), name="dispatch")
class ServiceCreateView(SuccessMessageMixin, generic.CreateView):
    form_class = service_form.ServiceModelForm
    success_url = '/create-service/'
    template_name = 'services/create_service.html'
    success_message = 'The service has been created successfully.'


@method_decorator(login_required(login_url="/user/signin/"), name="dispatch")
class ServiceListView(generic.ListView):
    model = Service
    paginate_by = 10
    context_object_name = 'services'
    template_name = 'services/services.html'


@method_decorator(login_required(login_url="/user/signin/"), name="dispatch")
class ServiceUpdateView(SuccessMessageMixin, generic.UpdateView):
    model = Service
    form_class = service_form.ServiceModelForm
    template_name = "services/create_service.html"
    success_message = "The service has been updated successfully."

    def get_success_url(self):
        return reverse('service_update', kwargs={'pk': self.object.id})


@method_decorator(login_required(login_url='/user/signin/'), name='dispatch')
class ServiceDeleteView(SuccessMessageMixin, generic.DeleteView):
    model = Service
    success_url = '/services/'
    success_message = 'The service has been deleted successfully.'
    template_name = 'common/delete_confirm.html'
