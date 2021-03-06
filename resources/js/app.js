import "@babel/polyfill";
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
import VueHighlightJS from 'vue-highlightjs'
import StarRating from 'vue-star-rating'
import { VueReCaptcha } from 'vue-recaptcha-v3'


Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(VueHighlightJS)
Vue.use(VueReCaptcha, { siteKey: process.env.MIX_RECAPTCHA_V3_PUBLIC_KEY })
Vue.use(VueLazyload)
import App from './components/App'
import Project from './components/content/Project'
import Quiz from './components/content/Quiz'
import Trainer from './components/content/Trainer'
import Live from './components/content/Live'
import Snippets from './components/content/Snippets'
import AboutBoS from './components/content/AboutBoS'
import Topics from './components/content/Topics'
import Statistics from './components/content/Statistics'
import Gallery from './components/content/Gallery'
import Login from './components/content/Login'
import Galleryfooter from "./components/galleryfooter";
import Gallerynav from "./components/Gallerynav";
Vue.component('galleryfooter', Galleryfooter);
Vue.component('gallerynav', Gallerynav);
Vue.component('star-rating', StarRating);


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
            path: '/trainer',
            name: 'trainer',
            component: Trainer
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
            path: '/aboutBoS',
            name: 'aboutBoS',
            component: AboutBoS
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

