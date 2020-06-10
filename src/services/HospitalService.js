import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


export default class HospitalService {

    hospitalList() {
        const url = `${API_BASE_URL}/api/hospital/`;
        return axios.get(url).then(response => response.data);
    }
    getHospital(id) {
        const url = `${API_BASE_URL}/api/hospital/${id}/`;
        return axios.get(url).then(response => response.data);
    }
    getHospitalsByURL(page) {
        const url = `${API_BASE_URL}${page}`;
        return axios.get(url).then(response => response.data);
    }
    deletehospital(hospital) {
        const url = `${API_BASE_URL}/api/hospital/${hospital.id}/`;
        return axios.delete(url);
    }
    createHospital(hospital) {
        const url = `${API_BASE_URL}/api/hospital/`;
        return axios.post(url, hospital);
    }
    updateHospital(hospital) {
        const url = `${API_BASE_URL}/api/hospital/${hospital.id}/`;
        return axios.put(url, hospital);
    }
}
