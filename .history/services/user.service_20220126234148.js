import axios from 'axios';

class UserServices {

    constructor() {
        this.instance = axios.create({
            baseURL: `http://localhost:3000/api/user`
        })
    }
    getUsers = () => this.instance.get("/");
    getUser = (email) =>this.instance.get('/', email)
    getDetails = (id) => this.instance.get(`/${id}`)
    createUser = (user) => this.instance.post("/new", user)
    updateUser = (id) => this.instance.put(`/${id}`)
}

export default UserServices;