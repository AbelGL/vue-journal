import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAn97cGvXF4IPsYyhsHD7EfrVXBZ3sz2u8'
    }
})


export default authApi