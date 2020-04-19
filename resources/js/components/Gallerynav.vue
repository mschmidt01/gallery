<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <router-link :to="{name: 'project'}" class="navbar-brand responsive-logo">
                <img :src="'/img/BoS-Logo.svg'" width="40" height="40" class="d-inline-block align-top" alt="BoS-Logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                    aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="navigation">

                <ul class="navbar-nav mr-auto w-100 nav-justified">
                    <li class="nav-item">
                        <router-link :to="{name: 'topics'}" class="nav-link" href="#">Gallerie</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">Learn BoS</a>
                        <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                            <router-link :to="{name: 'live'}" class="dropdown-item">BoS Live</router-link>
                            <router-link :to="{name: 'snippets'}" class="dropdown-item">Snippets</router-link>
                            <router-link :to="{name: 'trainer'}" class="dropdown-item">Trainer</router-link>
                            <router-link :to="{name: 'quiz'}" class="dropdown-item">Quiz</router-link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">Informationen</a>
                        <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                            <router-link :to="{name: 'aboutBoS'}" class="dropdown-item">Über BoS</router-link>
                            <router-link :to="{name: 'statistics'}" class="dropdown-item">Über Website</router-link>
                        </div>
                    </li>
                </ul>
                <router-link :to="{name: 'login'}">
                    <button class="btn login" type="button"><i class=" fas fa-sign-in-alt "></i> Login</button>
                </router-link>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Gallerynav"
    }
</script>

<style scoped>
    .navbar-dark .navbar-nav .nav-link {
        color: white;
    }

    .navbar-dark .navbar-nav .nav-link:hover {
        color: blue;
    }

    .navbar-dark .navbar-nav .nav-link:active {
        color: blue;
    }

    .navbar-dark .navbar-nav .nav-link:focus {
        color: blue;
    }

    .dropdown-item:active {
        background-color: blue;
        color: white;
    }

    .dropdown-item:hover {
        background-color: blue;
        color: white;
    }

    .dropdown-item:focus {
        background-color: blue;
        color: white;
    }

    nav {
        min-height: 80px;
    }

    .login {
        width: 100px;
        color: white;
        border: 1px solid blue;
    }

    .login:hover {
        color: blue;
    }

    .login:active {
        color: blue;
    }

    i {
        color: blue;
    }

    .dropdown-menu {
        border-top: 3px solid blue;
        color: #fff;
        border-radius: 0;
    }

    .dropdown-menu a {
        color: white;
    }

    @media (min-width: 768px) {
        .dropdown-menu > li {
            display: table-cell;
        }

        .dropdown-menu {
            left: 50%;
            right: auto;
            transform: translate(-50%, 0);
            margin-top: 18px;
        }
    }

    @media (max-width: 768px) {
        .responsive-logo {
            margin-left: auto;
            margin-right: auto;
            padding-left: 56px;
        }

        .dropdown-menu {
            text-align: center;
            border-left: 1px solid #ffffff20;
            border-right: 1px solid #ffffff20;
            border-bottom: 1px solid #ffffff20;
            max-width: 200px;
            margin-left: auto !important;
            margin-right: auto !important;
        }
    }

</style>
