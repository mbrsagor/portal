import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


export default class ExperienceService {

    experienceList() {
        const url = `${API_BASE_URL}/api/experience/`;
        return axios.get(url).then(response => response.data);
    }

    createExperience(experience) {
        const url = `${API_BASE_URL}/api/experience/`;
        return axios.post(url, experience);
    }

    updateExperience(experience) {
        const url = `${API_BASE_URL}/api/experience/${experience.id}/`;
        return axios.put(url, experience);
    }

    deleteExperience(experience) {
        const url = `${API_BASE_URL}/api/experience/${experience.id}/`;
        return axios.delete(url, experience);
    }
}
