import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import Project from './components/Project'
import Quiz from './components/Quiz'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Project
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: Quiz
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});