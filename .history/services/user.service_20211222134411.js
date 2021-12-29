import axios from 'axios';

class RickAndMortyService {
    constructor() {
        this.instance = axios.create({
            baseURL: `https://rickandmortyapi.com/api`
        })
    }

    getCharacters = () => this.instance.get("/character/?page=2");
    getCharacterByName = (name) => this.instance.get(`/character/?name=${name}`)
    getCharacterByPage = (page) => this.instance.get(`/character/?page=${page}`)
    getCharacterById = (id) => this.instance.get(`/character/${id}`)
}

export default RickAndMortyService;