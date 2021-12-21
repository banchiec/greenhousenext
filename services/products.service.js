import axios from 'axios';
class ProductsService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/products`,
            withCredentials: true
        })
    } 
  
    getProducts = () => this.instance.get("/") 


}
export default ProductsService;