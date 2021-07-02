import api from '@/plugins/axios'

export default {
    state: {
        validateInvestment: []
    },
    mutations: {
        async setsimulatInvestmente(state,  dados, ) {

            const response = await api.simulateInvestment(dados._id, dados.investmentValue);
            console.log(response);

            state.validateInvestment = response.data
        }

    },
    actions: {
        simulatInvestmente({ commit }, dados) {
           commit('setsimulatInvestmente', dados)
        }
    },
    getters: {
        valueInvestment(state) {
            return state.validateInvestment;
        }
    }

}