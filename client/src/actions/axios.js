import Axios from 'axios'
const URL = window.location.origin.includes('localhost')  ? "http://localhost:3005/api" : "/api"

const axios = Axios.create({
    baseURL: URL ,
    
})

export default axios