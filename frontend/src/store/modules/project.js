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
        }
    },
    actions: {
        initProjects({ commit }) {
            commit('setProjects', projects)
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