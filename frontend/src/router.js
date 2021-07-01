import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import List from './components/project/List'
import Create from './components/project/Create'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/list', component: List },
        { path: '/create', component: Create },
    ]
})