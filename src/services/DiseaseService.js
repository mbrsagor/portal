import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';

export default class DiseaseService {

    getDisease() {
        const url = `${API_BASE_URL}/api/disease/`;
        return axios.get(url).then(response => response.data);
    }

    getDiseaseById(id) {
        const url = `${API_BASE_URL}/api/disease/${id}/`;
        return axios.get(url).then(response => response.data);
    }

    deleteDisease(disease) {
        const url = `${API_BASE_URL}/api/disease/${disease.id}/`;
        return axios.delete(url);
    }

    createDisease(disease) {
        const url = `${API_BASE_URL}/api/disease/`;
        return axios.post(url, disease);
    }

    updateDisease(disease) {
        const url = `${API_BASE_URL}/api/disease/${disease.id}`;
        return axios.put(url, disease);
    }

}
