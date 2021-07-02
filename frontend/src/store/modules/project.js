import projects from '@/data/projets'
import api from '@/plugins/axios'
export default {
    state: {
        projects: []
    },
    mutations: {
        async setProjects(state) {
            const response = await api.list();
            state.projects = response.data
        },
        async setDeleteProjects(state, id) {
            const response = await api.delete(id);
            state.projects = response.data
        },
        async setcreateProjects(state, dados) {
            const response = await api.create(dados);
            state.projects = response.data
        }
    },
    actions: {
        initProjects({ commit }) {
            commit('setProjects', projects)
        },
        createProjects({ commit }, dados) {
            commit('setcreateProjects', dados)
        },
        deleteProjects({ commit }, id) {
            commit('setDeleteProjects', id)
        }
    },
    getters: {
        projects(state) {
            return state.projects;
        }
    }
}