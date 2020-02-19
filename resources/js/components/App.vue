<template>
    <div>


        <ul class="navbar navbar-fixed-top">
            <li> <router-link :to="{name: 'home'}" class="navbar-brand">BILDER</router-link></li>
            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="" aria-expanded="false">INFORMATIONEN
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><router-link :to="{name: 'project'}" class="navbar-brand">BOS PROJEKT</router-link></li>
                    <li><router-link :to="{name: 'pattern'}" class="navbar-brand">Trainer Muster</router-link></li>
                    <li><router-link :to="{name: 'statistics'}" class="navbar-brand">Statistik</router-link></li>
                </ul>
            </li>
            <router-link :to="{name: 'live'}" class="navbar-brand">BoS LIVE</router-link>
            <router-link :to="{name: 'snippets'}" class="navbar-brand">Snippets</router-link>
            <router-link :to="{name: 'quiz'}" class="navbar-brand">QUIZ</router-link>
            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="">HILFE <span
                    class="caret"></span></a>
                <ul class="dropdown-menu">
                    <router-link :to="{name: 'quiz'}" class="navbar-brand">FRAGEN</router-link>
                    <router-link :to="{name: 'functions'}" class="navbar-brand">FUNKTIONEN</router-link>
                    <li role="presentation" class="divider"></li>
                    <router-link :to="{name: 'about'}" class="navbar-brand">Über</router-link>
                </ul>
            </li>
        </ul>
        <div class="row justify-content-center">
            <div id="Inhalt" class="col-md-9 col-md-offset-1" style="padding-bottom:75px;">
                <main class="py-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>

        <footer class="container-fluid text-center no-padding">
            <a href="#home" title="To Top">
                <span class="glyphicon glyphicon-chevron-up"></span>
            </a>
            <p>Ein Projekt der Web&amp;Mobile Gruppe der Fachbereiche IEM/MND
                | <a href="https://www.thm.de/site/impressum.html" title="Impressum">Impressum</a>
                | <a href="https://www.thm.de/site/datenschutz.html" title="Datenschutz">Datenschutz</a>
            </p>
        </footer>
    </div>
</template>
<script>
    export default {}
</script>