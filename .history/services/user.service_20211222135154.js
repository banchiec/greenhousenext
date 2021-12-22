import axios from 'axios';

class userService {
    constructor() {
        this.instance = axios.create({
            baseURL: `https://localhost:3000/api`
        })
    }

    getUsers = () => this.instance.get("/user");
    getDetails = (id) => this.instance.get(`/user/${id}`)
    createUser = (user) => this.instance.post(`/user`)
}

export default RickAndMortyService;