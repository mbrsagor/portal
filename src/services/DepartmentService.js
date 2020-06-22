import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


export default class DepartmentService {

    departmentList() {
        const url = `${API_BASE_URL}/api/department/`;
        return axios.get(url).then(response => response.data);
    }
    getdepartment(id) {
        const url = `${API_BASE_URL}/api/department/${id}/`;
        return axios.get(url).then(response => response.data);
    }
    getdepartmentByURL(page) {
        const url = `${API_BASE_URL}${page}`;
        return axios.get(url).then(response => response.data);
    }
    deleteDepartment(department) {
        const url = `${API_BASE_URL}/api/department/${department.id}/`;
        return axios.delete(url);
    }
    createDepartment(department) {
        const url = `${API_BASE_URL}/api/department/`;
        return axios.post(url, department);
    }
    updateDepartment(department) {
        const url = `${API_BASE_URL}/api/department/${department.id}/`;
        return axios.put(url, department);
    }
}
