import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://safe-air01.herokuapp.com'
})


export default instance