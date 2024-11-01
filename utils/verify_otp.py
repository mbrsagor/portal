def post(self, request, *args, **kwargs):
        # Get OTP from request
        digit1 = request.POST.get("digit1")
        digit2 = request.POST.get("digit2")
        digit3 = request.POST.get("digit3")
        digit4 = request.POST.get("digit4")
        otp = f"{digit1}{digit2}{digit3}{digit4}"
        # Get phone number from session
        phone = request.session.get('phone')
        # Check if OTP is valid
        otp_verify = OTPVerification.objects.filter(phone=phone, otp=otp).first()
        if otp_verify:
            otp_verify.delete()
            messages.success(request, 'OTP Verification successfully.')
            # request.session.pop(phone)
            return redirect('choose_device')
        else:
            messages.error(request, 'Invalid OTP. Please try again.')
            return redirect('verify_otp')
        return render(request, self.template_name)

