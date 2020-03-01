import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'

Vue.use(VueRouter)
Vue.use(VueLazyload)

import App from './components/App'
import Project from './components/content/Project'
import Quiz from './components/content/Quiz'
import Pattern from './components/content/Pattern'
import Live from './components/content/Live'
import Snippets from './components/content/Snippets'
import Questions from './components/content/Questions'
import Functions from './components/content/Functions'
import Topics from './components/content/Topics'
import About from './components/content/About'
import Statistics from './components/content/Statistics'
import Gallery from './components/content/Gallery'

import Galleryfooter from "./components/galleryfooter";
import Gallerynav from "./components/Gallerynav";
Vue.component('galleryfooter', Galleryfooter);
Vue.component('gallerynav', Gallerynav);

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

