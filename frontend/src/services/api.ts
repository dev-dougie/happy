import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3311',
})


export default api;