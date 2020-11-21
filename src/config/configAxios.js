import axios from "axios";

const axiosFetch=axios.create({
    baseURL: 'http://localhost:3306'
})

export default axiosFetch;