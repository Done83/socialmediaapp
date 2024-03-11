import axios from 'axios';
class UserService {
    static registerUser = (body) => axios.post('http://localhost:4000/api/auth/register', body);
}

export default UserService;