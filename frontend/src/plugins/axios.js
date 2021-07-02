import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:3333/"
});

export default {
    list() {
        return api.get('manageProjects/list');
    },

    delete(_id) {
        return api.post('manageProjects/delete', {
        _id,
        });
    },

    simulateInvestment(_id, investmentValue) {
        console.log(_id);
        console.log(investmentValue);
        return api.post('manageProjects/simulateInvestment', {
             _id,
            investmentValue
        });
    }
}

