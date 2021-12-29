import axios from 'axios';

class userService {
    constructor() {
        this.instance = axios.create({
            baseURL: `https://localhost:3000/api`
        })
    }

    getUsers = () => this.instance.get("/user");
    getCharacterById = (id) => this.instance.get(`/user/${id}`)
    // getCharacterById = (id) => this.instance.get(`/character/${id}`)
}

export default RickAndMortyService;