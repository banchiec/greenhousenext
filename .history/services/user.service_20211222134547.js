import axios from 'axios';

class userService {
    constructor() {
        this.instance = axios.create({
            baseURL: `https://localhost:3000/api`
        })
    }

    getUsers = () => this.instance.get("/user");
    // getCharacterByName = (name) => this.instance.get(`/character/?name=${name}`)
    // getCharacterByPage = (page) => this.instance.get(`/character/?page=${page}`)
    // getCharacterById = (id) => this.instance.get(`/character/${id}`)
}

export default RickAndMortyService;