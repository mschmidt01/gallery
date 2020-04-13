<template>
    <footer class="mt-5 pt-2">
        <p class="text-center">Ein Projekt der Web&amp;Mobile Gruppe der Fachbereiche IEM/MND
          <router-link title="Impressum" :to="{name: 'impressum'}">Impressum</router-link>
          <span class="link-separator">|</span>
          <router-link title="Datenschutz" :to="{name: 'privacypolicy'}">Datenschutz</router-link>
        </p>
    </footer>
</template>

<script>
    export default {
        name: "galleryfooter"
    }
</script>
