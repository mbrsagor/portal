import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


class HospitalService {
    serviceList() {
        const url = `${API_BASE_URL}/api/service/`;
        return axios.get(url).then(response => response.data);
    }

    createService(service) {
        const url = `${API_BASE_URL}/api/service/`;
        return axios.post(url, service);
    }

    updateService(service) {
        const url = `${API_BASE_URL}/api/service/${service.id}/`;
        return axios.put(url, service);
    }

    deleteService(service) {
        const url = `${API_BASE_URL}/api/service/${service.id}/`;
        return axios.delete(url, service);
    }
}
export default HospitalService
