import projects from '@/data/projets'
import api from '@/plugins/axios'
export default {
    state: {
        projects: []
    },
    mutations: {
        async setProjects(state, projects) {
            const response = await api.list();
            state.projects = response.data
        },
        async setDeleteProjects(state, projects) {
            const response = await api.delete(projects);
            state.projects = response.data
        }
    },
    actions: {
        InvestmentProject({ commit }, order) {
            commit()
        },
        initProjects({ commit }) {
            console.log('initProjects...');
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