import axios from 'axios'
const API_BASE_URL = 'http://localhost:8000';

export default class LaboratorieService {
    laboratorieList() {
        const url = `${API_BASE_URL}/api/laboratories/`;
        return axios.get(url).then(response => response.data);
    }

    laboratorieCreate(laboratorie) {
        const url = `${API_BASE_URL}/api/laboratories/`;
        return axios.post(url, laboratorie);
    }

    laboratorieUpdate(laboratorie) {
        const url = `${API_BASE_URL}/api/laboratories/${laboratorie.id}`;
        return axios.put(url, laboratorie);
    }

    laboratorieDelete(laboratorie) {
        const url = `${API_BASE_URL}/api/laboratories/${laboratorie.id}`;
        return axios.delete(url);
    }
}
