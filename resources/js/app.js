import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
import VueHighlightJS from 'vue-highlightjs'


Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(VueHighlightJS)

import App from './components/App'
import Project from './components/content/Project'
import Quiz from './components/content/Quiz'
import Pattern from './components/content/Pattern'
import Live from './components/content/Live'
import Snippets from './components/content/Snippets'
import Functions from './components/content/Functions'
import Topics from './components/content/Topics'
import Statistics from './components/content/Statistics'
import Gallery from './components/content/Gallery'
import Login from './components/content/Login'

import Galleryfooter from "./components/galleryfooter";
import Gallerynav from "./components/Gallerynav";
import Skeleton from "./components/content/skeleton"
Vue.component('galleryfooter', Galleryfooter);
Vue.component('gallerynav', Gallerynav);
Vue.component('skeleton-box', Skeleton)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/project',
            name: 'project',
            component: Project
        },
        {
            path: '/login',
            name: 'login',
            component: Login
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
            path: '/functions',
            name: 'functions',
            component: Functions
        },
        {
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
        },
        {
            path: '/',
            redirect: '/project'
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});

