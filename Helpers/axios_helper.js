import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8080/mvc-a365/public/User/Main",
    timeout: 120,
    headers: { 'Content-Type': 'text/plain' }
});