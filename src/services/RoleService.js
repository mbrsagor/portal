import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';

class RoleService{
    roleList() {
        const url = `${API_BASE_URL}/api/user/role/`;
        return axios.get(url).then(response => response.data);
    }

    createRole(role) {
        const url = `${API_BASE_URL}/api/user/role/`;
        return axios.post(url, role);
    }

    updateRole(role) {
        const url = `${API_BASE_URL}/api/user/role/${role.id}/`;
        return axios.put(url, role);
    }

    DeleteRole(role) {
        const url = `${API_BASE_URL}/api/user/role/${role.id}/`;
        return axios.delete(url);
    }
}

export default RoleService;
