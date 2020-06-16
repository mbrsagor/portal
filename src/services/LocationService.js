import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


export default class LocationService {

    locationList() {
        const url = `${API_BASE_URL}/api/location/`;
        return axios.get(url).then(response => response.data);
    }

    createLocation(location) {
        const url = `${API_BASE_URL}/api/location/`;
        return axios.post(url, location);
    }

    updateLocation(location) {
        const url = `${API_BASE_URL}/api/location/${location.id}/`;
        return axios.put(url, location);
    }

    deleteLocation(location) {
        const url = `${API_BASE_URL}/api/location/${location.id}/`;
        return axios.delete(url, location);
    }
}
