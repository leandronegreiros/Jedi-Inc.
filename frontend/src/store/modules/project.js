import projects from '@/data/projets'

export default {
    state: {
        projects: []
    },
    mutations: {
        setProjects(state, projects) {
            state.projects = projects
        }
    },
    actions: {
        InvestProject({ commit }, order) {
            commit()
        },
        initProjects({ commit }) {
            console.log('initProjects...');
            commit('setProjects', projects)
        }
    },
    getters: {
        projects(state) {
            return state.projects;
        }
    }
}