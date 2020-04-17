import Vue from "vue";
import VueRouter from "vue-router";
import VueLazyload from "vue-lazyload";
import VueHighlightJS from "vue-highlightjs";
import StarRating from "vue-star-rating";
import { VueReCaptcha } from "vue-recaptcha-v3";

Vue.use(VueRouter);
Vue.use(VueLazyload);
Vue.use(VueHighlightJS);

/* Check if consent for ReCAPTCHA is given */
const cookieArray = document.cookie.replace(" ", "").split(";");
if (cookieArray.includes("recaptcha=true")) {
    Vue.use(VueReCaptcha, {
        siteKey: "6Leu_-EUAAAAAL_onmYmQKxk4tlpbyfxQm9tiZTJ"
    });
}

import App from "./components/App";
import Project from "./components/content/Project";
import Quiz from "./components/content/Quiz";
import Pattern from "./components/content/Pattern";
import Live from "./components/content/Live";
import Snippets from "./components/content/Snippets";
import Functions from "./components/content/Functions";
import Topics from "./components/content/Topics";
import Statistics from "./components/content/Statistics";
import Gallery from "./components/content/Gallery";
import Login from "./components/content/Login";
import Galleryfooter from "./components/galleryfooter";
import Gallerynav from "./components/Gallerynav";
import Skeleton from "./components/content/skeleton";
import CookieNotice from "./components/CookieNotice";
import Impressum from "./components/content/Impressum";
import PrivacyPolicy from "./components/content/PrivacyPolicy";

Vue.component("galleryfooter", Galleryfooter);
Vue.component("gallerynav", Gallerynav);
Vue.component("skeleton-box", Skeleton);
Vue.component("cookie-notice", CookieNotice);
Vue.component("star-rating", StarRating);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/project",
            name: "project",
            component: Project,
            meta: {
                title: "Project",
                metaTags: [
                    {
                        name: "description",
                        content: "Die Homepage des BoS Projekts."
                    }
                ]
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                title: "Login",
                metaTags: [
                    {
                        name: "robots",
                        content: "noindex"
                    }
                ]
            }
        },
        {
            path: "/quiz",
            name: "quiz",
            component: Quiz,
            meta: {
                title: "Quiz",
                metaTags: [
                    {
                        name: "description",
                        content: "Stelle dein Können unter Beweis!"
                    }
                ]
            }
        },
        {
            path: "/pattern",
            name: "pattern",
            component: Pattern,
            meta: {
                title: "Trainer Muster",
                metaTags: [
                    {
                        name: "description",
                        content: "Lerne diverse Muster zu erzeugen."
                    }
                ]
            }
        },
        {
            path: "/live",
            name: "live",
            component: Live,
            meta: {
                title: "BoS Live",
                metaTags: [
                    {
                        name: "description",
                        content: "Erzeuge live deine eigenen Muster."
                    }
                ]
            }
        },
        {
            path: "/snippets",
            name: "snippets",
            component: Snippets,
            meta: {
                title: "Code-Snippets",
                metaTags: [
                    {
                        name: "description",
                        content: "JavaScript Beispiele für die Live-Version."
                    }
                ]
            }
        },
        {
            path: "/functions",
            name: "functions",
            component: Functions,
            meta: {
                title: "Über BoS",
                metaTags: [
                    {
                        name: "description",
                        content:
                            "Weitere Informationen sowie eine Übersicht der implementierten Funktionen."
                    }
                ]
            }
        },
        {
            path: "/statistics",
            name: "statistics",
            component: Statistics,
            meta: {
                title: "Über die Website",
                metaTags: [
                    {
                        name: "description",
                        content: "Statistiken und verwendete Technologien."
                    }
                ]
            }
        },
        {
            path: "/topics",
            name: "topics",
            component: Topics,
            meta: {
                title: "Themen",
                metaTags: [
                    {
                        name: "description",
                        content: "Übersicht der verschiedenen Themengebiete."
                    }
                ]
            }
        },
        {
            path: "/gallery",
            name: "gallery",
            component: Gallery,
            meta: {
                title: "Galerie",
                metaTags: [
                    {
                        name: "description",
                        content:
                            "Für das BoS erstellte Bilder, Muster und Formen."
                    }
                ]
            }
        },
        {
            path: "/impressum",
            name: "impressum",
            component: Impressum,
            meta: {
                title: "Impressum",
                metaTags: [
                    {
                        name: "description",
                        content:
                            "Wichtige Information über den Betreiber der BoS Seite."
                    }
                ]
            }
        },
        {
            path: "/privacypolicy",
            name: "privacypolicy",
            component: PrivacyPolicy,
            meta: {
                title: "Datenschutzerklärung",
                metaTags: [
                    {
                        name: "description",
                        content:
                            "Wichtige Information über den Datenschutz der BoS Seite."
                    }
                ]
            }
        },
        {
            path: "/",
            redirect: "/project"
        }
    ]
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nestee and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(
        document.querySelectorAll("[data-vue-router-controlled]")
    ).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map(tagDef => {
            const tag = document.createElement("meta");

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create, so we don't interfere with other ones.
            tag.setAttribute("data-vue-router-controlled", "");

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

const app = new Vue({
    el: "#app",
    components: { App },
    router
});
