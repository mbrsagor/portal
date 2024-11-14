def post(self, request, *args, **kwargs):
        # Get data from request
        project_id = request.POST.get('project')
        source_type= request.POST.get('source_type')
        amount = request.POST.getlist('amount[]')
        notes = request.POST.getlist('notes[]')
        quantity = request.POST.getlist('quantity[]')
        date = request.POST.getlist('date[]')
        labor_ids = request.POST.getlist('labor[]')
        vendor = request.POST.getlist('vendor[]')

        # Combine the data into a list of dictionaries for each Profit
        _data = [{'date': date, 'quantity': quantity, 'amount': amount, 'labor_ids': labor_ids,'notes':notes} for date, quantity, amount, labor_ids, notes in zip(date, quantity, amount, labor_ids, notes)]

        # Create a new Transaction
        transaction = Transaction(project_id=project_id, source_type=source_type)
        transaction.save()

        # Create Profit instances and associate them with the Transaction
        for profit_data in _data:
            labor_id = int(profit_data["labor_ids"])
            #  Retrieve the specific Labor instance
            labor_instance = Labor.objects.get(id=labor_id)

            # Create the Profit instance, associating it with the Labor instance
            profit = Profit(
                amount=profit_data["amount"],
                quantity=profit_data["quantity"],
                date=profit_data["date"],
                notes=profit_data["notes"],
                labor=labor_instance,
            )
            profit.save()

            # Associate the Profit instance with the Transaction
            transaction.profits.add(profit)
        # Save the transaction after adding all profits
        transaction.save()
        return render(request, self.template_name)

