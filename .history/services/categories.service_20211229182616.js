import axios from 'axios'

class CategoriesService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/category`
        })
    }
    getCategoryById = (id) => this.instance.get(`/${id}`)
}


export default CategoriesService; 