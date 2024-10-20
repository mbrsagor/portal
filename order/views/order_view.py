from django.views import generic
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.contrib.messages.views import SuccessMessageMixin

from order.models import Order
from order.forms.order_form import OrderModelForm


@method_decorator(login_required(login_url="/user/signin/"), name="dispatch")
class OrderCreateView(SuccessMessageMixin, generic.CreateView):
    model = Order
    form_class = OrderModelForm
    template_name = 'order/create_order.html'
    success_url = '/order/'
    success_message = 'The order has been created successfully.'

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)
