import axios from 'axios';

const api = axios.create({
    baseURL:'https://mdbox-backend.herokuapp.com'
});

export default api;