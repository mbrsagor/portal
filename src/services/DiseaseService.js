import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';

export default class DiseaseService {

    getDisease() {
        const url = `${API_BASE_URL}/api/disease/`;
        return axios.get(url).then(response => response.data);
    }
}
