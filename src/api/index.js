import axios from 'axios';

export default
axios.create({
    baseURL: 'http://127.0.0.1:8081/'
        //baseURL: 'http://reactify.theironnetwork.org/data/',
        //frontURL: "http://localhost:8080/",
        //frontDevURL: "http://localhost:8080/default/pages",
        //apiURL: "http://127.0.0.1:8081/"
});