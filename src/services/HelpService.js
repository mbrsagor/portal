import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


export default class HelperService {

    getCustomers() {
        const url = `${API_BASE_URL}/api/help/`;
        return axios.get(url).then(response => response.data);
    }
    getCustomer(id) {
        const url = `${API_BASE_URL}/api/help/${id}/`;
        return axios.get(url).then(response => response.data);
    }
    deleteCustomer(help) {
        const url = `${API_BASE_URL}/api/help/${help.id}/`;
        return axios.delete(url);
    }
    createCustomer(help) {
        const url = `${API_BASE_URL}/api/help/`;
        return axios.post(url, help);
    }
    updateCustomer(help) {
        const url = `${API_BASE_URL}/api/help/${help.id}/`;
        return axios.put(url, help);
    }
}
