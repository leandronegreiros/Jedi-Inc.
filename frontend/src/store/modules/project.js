import api from '@/plugins/axios'
export default {
    state: {
        projects: [],
        projectsUpdate: []
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
            const response = await api.update(dados);
            state.projects = response.data
        },
        setProjectUpdate(state, dados) {
            state.projectsUpdate = dados
        }
    },
    actions: {
        initProjects({ commit }) {
            commit('setProjects', this.state)
        },
        createProjects({ commit }, dados) {
            commit('setcreateProjects', dados)
        },
        deleteProjects({ commit }, id) {
            commit('setDeleteProjects', id)
        },
        projectUpdate({ commit }, project) {
            commit('setProjectUpdate', project)
        }
    },
    getters: {
        projects(state) {
            return state.projects;
        },
        projectsUpdate(state) {
            return state.projectsUpdate;
        }
    }
}