<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <router-link :to="{name: 'project'}" class="navbar-brand responsive-logo">
        <img
          :src="'/img/BoS-Logo.svg'"
          width="40"
          height="40"
          class="d-inline-block align-top"
          alt="BoS-Logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-center" id="navigation">
        <ul class="navbar-nav mr-auto w-100 nav-justified">
          <li class="nav-item">
            <router-link v-on:click.native="resetParents()" :to="{name: 'topics'}" class="nav-link" href="#">Gallerie</router-link>
          </li>
          <li class="nav-item dropdown" v-on:childClicked="setLearnChildTrue()" v-bind:class="{ 'active-parent': learnChild }">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Learn BoS</a>
            <div ref="learnDropdown" class="dropdown-menu bg-dark">
              <router-link v-on:click.native="setLearnChildTrue()" :to="{name: 'live'}" aria-label="BoS Live" class="dropdown-item">BoS Live</router-link>
              <router-link v-on:click.native="setLearnChildTrue()" :to="{name: 'snippets'}" aria-label="Snippets" class="dropdown-item">Snippets</router-link>
              <router-link v-on:click.native="setLearnChildTrue()" :to="{name: 'pattern'}" aria-label="Trainer" class="dropdown-item">Trainer</router-link>
              <router-link v-on:click.native="setLearnChildTrue()" :to="{name: 'quiz'}" aria-label="Quiz" class="dropdown-item">Quiz</router-link>
            </div>
          </li>
          <li class="nav-item dropdown" v-bind:class="{ 'active-parent': informationChild }">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Informationen</a>
            <div ref="informationDropdown" class="dropdown-menu bg-dark">
              <router-link v-on:click.native="setInformationChildTrue()" :to="{name: 'functions'}" aria-label="Über BoS" class="dropdown-item">Über BoS</router-link>
              <router-link v-on:click.native="setInformationChildTrue()" :to="{name: 'statistics'}" aria-label="Über die Website"  class="dropdown-item">Über Website</router-link>
            </div>
          </li>
        </ul>
        <router-link :to="{name: 'login'}" class="login-button">
          <button class="btn login" type="button">
            <i class="fas fa-sign-in-alt"></i> Login
          </button>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Gallerynav",
  data: function() {
    const currentPath = window.location.pathname;
    let learnChild, informationChild = false;

    if(currentPath === "/snippets" ||currentPath === "/live" || currentPath === "/pattern" || currentPath === "/quiz") {
      learnChild = true;
    } else if(currentPath === "/functions" || currentPath === "/statistics") {
      informationChild = true;
    }

    return {
      learnChild,
      informationChild
    };
  },
  methods: {
    setLearnChildTrue() {
      this.learnChild = true;
      this.informationChild = false;

      
      this.$refs.learnDropdown.classList.remove("show");
    },
    setInformationChildTrue() {
      this.learnChild = false;
      this.informationChild = true;

      this.$refs.informationDropdown.classList.remove("show");
    },
    resetParents() {
      this.learnChild = false;
      this.informationChild = false;
    },
    InlineButtonClickHandler(event) {
      console.log("CHILD CLICKED!");

      this.$emit('childClicked');
    }
  }
};
</script>

<style scoped>
/*Navigation*/

/*
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
    */

@media (min-width: 768px) {
  /*.nav>li.dropdown.open{
            position:static;
        }
        .nav>li.dropdown.open.dropdown-menu{
            display:table;
            width:100%;
            text-align:center;
            left:0;
            right:0;
        }
        .dropdown-menu > li {
            display: table-cell;
        }

        .dropdown-menu {
            left: 50%;
            right: auto;
            transform: translate(-50%, 0);
            margin-top: 18px;
        }
        */
}

@media (max-width: 768px) {
  /*
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
        */
}
</style>
