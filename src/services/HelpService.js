import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


export default class HelperService {

    listHelp() {
        const url = `${API_BASE_URL}/api/help/`;
        return axios.get(url).then(response => response.data);
    }
    getHelp(id) {
        const url = `${API_BASE_URL}/api/help/${id}/`;
        return axios.get(url).then(response => response.data);
    }
    deleteHelp(help) {
        const url = `${API_BASE_URL}/api/help/${help.id}/`;
        return axios.delete(url);
    }
    createHelp(help) {
        const url = `${API_BASE_URL}/api/help/`;
        return axios.post(url, help);
    }
    updateHelp(help) {
        const url = `${API_BASE_URL}/api/help/${help.id}/`;
        return axios.put(url, help);
    }
}
