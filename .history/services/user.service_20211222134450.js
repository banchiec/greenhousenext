import axios from 'axios';

class userService {
    constructor() {
        this.instance = axios.create({
            baseURL: `https://localhost:3000/api`
        })
    }

    getCharacters = () => this.instance.get("/character/?page=2");
    getCharacterByName = (name) => this.instance.get(`/character/?name=${name}`)
    getCharacterByPage = (page) => this.instance.get(`/character/?page=${page}`)
    getCharacterById = (id) => this.instance.get(`/character/${id}`)
}

export default RickAndMortyService;