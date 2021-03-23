import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-eb0f4-default-rtdb.firebaseio.com/'
});

export default instance;