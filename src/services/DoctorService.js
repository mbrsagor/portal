import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


export default class DoctorService {

    DoctorList() {
        const url = `${API_BASE_URL}/api/doctor/`;
        return axios.get(url).then(response => response.data);
    }

    createDoctor(doctor) {
        const url = `${API_BASE_URL}/api/doctor/`;
        return axios.post(url, doctor);
    }

    updateDoctor(doctor) {
        const url = `${API_BASE_URL}/api/doctor/${doctor.id}/`;
        return axios.put(url, doctor);
    }

    deleteDoctor(doctor) {
        const url = `${API_BASE_URL}/api/doctor/${doctor.id}/`;
        return axios.delete(url, doctor);
    }
}
