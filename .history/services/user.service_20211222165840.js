import axios from 'axios';

class UserServices {
    constructor() {
        this.instance = axios.create({
            baseURL: `http://localhost:3000/api/user`
        })
    }

    createUser = (user) => this.instance.post("/", user)
    getUsers = () => this.instance.get("/");
    getDetails = (id) => this.instance.get(`/${id}`)
    updateUser = (id) => this.instance.put(`/${id}`)
}

export default UserServices;