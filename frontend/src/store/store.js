import Vue from 'vue'
import Vuex from 'vuex'

import projects from './modules/project'
import investment from './modules/investment'

Vue.use(Vuex);

export default new Vuex.Store({
     modules: {
        projects,
        investment
     }
})