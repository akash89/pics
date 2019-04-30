import axios from 'axios';

// Custom config file
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8374e92b5d2c1716567c3d49d565dccd0d53a4b1133ea6f2b111156766aad992'
    }
});