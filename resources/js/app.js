import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'

Vue.use(VueRouter)
Vue.use(VueLazyload)

import App from './components/App'
import Project from './components/Project'
import Quiz from './components/Quiz'
import Pattern from './components/Pattern'
import Live from './components/Live'
import Snippets from './components/Snippets'
import Questions from './components/Questions'
import Functions from './components/Functions'
import Topics from './components/Topics'
import About from './components/About'
import Statistics from './components/Statistics'
import Gallery from './components/Gallery'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/project',
            name: 'project',
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
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },{
            path: '/statistics',
            name: 'statistics',
            component: Statistics
        },
        {
            path: '/topics',
            name: 'topics',
            component: Topics
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: Gallery
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});