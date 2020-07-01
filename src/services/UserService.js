import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';


class UserService {

    listOfUsers() {
        const url = `${API_BASE_URL}/api/user/users/`;
        return axios.get(url).then(response => response.data)
    }
}
export default UserService;
