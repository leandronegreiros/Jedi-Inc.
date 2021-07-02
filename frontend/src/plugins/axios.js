import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:3333/"
});

export default {
    list() {
        return api.get('manageProjects/list');
    },

    delete(codes) {
        return api.post('manageProjects/delete', {
        _id: codes,
        });
    }
}

