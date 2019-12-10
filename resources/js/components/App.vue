<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <router-link :to="{name: 'home'}" class="navbar-brand">Projekt</router-link>
                <router-link :to="{name: 'quiz'}" class="navbar-brand">QUIZ</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto"></ul>
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-link"> Hi, There</li>
                    </ul>
                </div>
            </div>
        </nav>
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