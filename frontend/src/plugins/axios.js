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

    create(dados) {
        return api.post('manageProjects/create', {
            name: dados.name,
            date: dados.date,
            end_date: dados.end_date,
            project_value: dados.project_value,
            risk: dados.risk,
            participants: dados.participants,
        });
    },

    update(dados) {
        console.log(dados);

        return api.post('manageProjects/update', {
            _id: dados._is,
            name: dados.name,
            date: dados.date,
            end_date: dados.end_date,
            project_value: dados.project_value,
            risk: dados.risk,
            participants: dados.participants,
        });
    },

    simulateInvestment(_id, investmentValue) {
        return api.post('manageProjects/simulateInvestment', {
            _id,
            investmentValue
        });
    }
}

