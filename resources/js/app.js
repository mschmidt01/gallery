import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import Project from './components/Project'
import Quiz from './components/Quiz'
import Pattern from './components/Pattern'
import Live from './components/Live'
import Snippets from './components/Snippets'
import Questions from './components/Questions'
import Functions from './components/Functions'

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
        {
            path: '/pattern',
            name: 'pattern',
            component: Pattern
        },
        {
            path: '/live',
            name: 'live',
            component: Live
        },
        {
            path: '/snippets',
            name: 'snippets',
            component: Snippets
        },
        {
            path: '/questions',
            name: 'questions',
            component: Questions
        },
        {
            path: '/functions',
            name: 'functions',
            component: Functions
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});