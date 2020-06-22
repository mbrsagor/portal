import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


export default class AvailabilityService {

    getAvailability() {
        const url = `${API_BASE_URL}/api/availability/`;
        return axios.get(url).then(response => response.data);
    }

    createAvailability(availability) {
        const url = `${API_BASE_URL}/api/availability`;
        return axios.post(url, availability);
    }

    udpateAvailability(availability) {
        const url = `${API_BASE_URL}/api/availability/${availability.id}/`;
        return axios.put(url, availability);
    }

    deleteAvailability(availability) {
        const url = `${API_BASE_URL}/api/availability/${availability.id}/`;
        return axios.delete(url);
    }

}
