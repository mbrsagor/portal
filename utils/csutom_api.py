class PopularEventListView(generics.ListAPIView):
    """
    Name: Popular Event List
    Description: List all popular events
    URL: /api/v1/sponsor/popular-events/
    Methods: GET
    :param
    :return
    """
    queryset = Event.objects.all()
    serializer_class = event_serializer.EventSerializer
    pagination_class = custom_pagination.CustomPagination

    def get_queryset(self):
        latitude = self.request.query_params.get("latitude")
        longitude = self.request.query_params.get("longitude")
        event_type = self.request.query_params.get("event_type")

        # Get all popular events
        if int(event_type) == 1:
            purchase_event = PurchaseEvent.objects.all()
            purchase_event_ides = [popular.event.id for popular in purchase_event]
            popular_events = Event.objects.filter(id__in=purchase_event_ides)
            return popular_events

        # Get all nearest events
        elif int(event_type) == 2:
            queryset = Event.objects.all()
            device_location = (latitude, longitude)
            # print(queryset.distinct)
            print(queryset)
            # nearby_events = location_service.filter_locations_within_radius(device_location, queryset, settings.RADIUS_KM)
            return queryset

