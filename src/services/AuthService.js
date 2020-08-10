import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';

export default class AuthService {
    // Login
    login(username, password) {
        return axios.post(`${API_BASE_URL}/rest-auth/login/`, {
            username,
            password
        }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    // Logout
    logout() {
        return axios.post(`${API_BASE_URL}/rest-auth/logout/`, {}).then(response => {
            if (response.data.accessToken) {
                localStorage.removeItem('user', JSON.stringify(response.data))
            }
            return response.data;
        })
    }

    // User Registration
    registration(username, email, password) {
        return axios.post(`${API_BASE_URL}/api/accounts/register/`, {
            username,
            email,
            password
        });
    }

    // Current user
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }


}
