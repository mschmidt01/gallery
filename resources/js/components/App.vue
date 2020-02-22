<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                <router-link :to="{name: 'project'}" class="navbar-brand responsive-logo">
                    <img :src="'/img/BoS-Logo.svg'" width="40" height="40" class="d-inline-block align-top" alt="">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse text-center" id="navigation">

                    <ul class="navbar-nav mr-auto w-100 nav-justified">
                        <li class="nav-item">
                            <router-link :to="{name: 'home'}" class="nav-link" href="#">Gallerie</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="test" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Learn BoS</a>
                            <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                                <router-link :to="{name: 'live'}" class="dropdown-item">BoS Live</router-link>
                                <router-link :to="{name: 'snippets'}" class="dropdown-item">Snippets</router-link>
                                <router-link :to="{name: 'pattern'}" class="dropdown-item">Trainer</router-link>
                                <router-link :to="{name: 'quiz'}" class="dropdown-item">Quiz</router-link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'functions'}" class="nav-link" href="#">Informationen</router-link>
                        </li>
                        <!--<li class="btn login" type="button"><i class=" fas fa-sign-in-alt "></i> Login</li>-->
                    </ul>
                    <button class="btn login" type="button"><i class=" fas fa-sign-in-alt "></i> Login</button>
                </div>


            </nav>
        </header>


        <!--<ul class="navbar navbar-fixed-top">
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
        </ul>-->
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
