<template>

    <div>
        <h1 class="title">Über die Website</h1>
        <section>
            <h2>Statistiken</h2>
            <div class="row">
                <div class="col-md-6 col-md-offset-1">
                    <table  class="table table-bordered table-hover">

                        <tr><td>Bilder</td><td>{{picturecount}} </td></tr>
                        <tr><td>Bewertungen</td><td>{{votingcount}} </td></tr>
                    </table>

                    <ul>
                        <li v-for="count in countbystars" >
                            <router-link :to="{name: 'gallery', params: {stars: count.stars}}">
                                {{count.stars}} Sterne ({{count.value}})</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <div>
                <h2>Technologien & Umsetzung</h2>
                <p>Diese Web-Applikation nutzt mehrere freie Bibliotheken und Module, die nachfolgend aufgef&uuml;hrt
                    sind.</p>
                <ul>
                    <li><a href="https://jquery.com" target="_blank" rel="noopener noreferrer">jQuery</a></li>
                    <li><a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</a></li>
                    <li><a href="https://www-coding.de/so-gehts-eigenes-captcha-mit-php/" rel="noopener noreferrer">Captcha-Modul
                        von WWW Coding</a></li>
                </ul>

                <p>Bei der Realisierung haben mitgewirkt:</p>
                <ul>
                    <li>Ibrahim Nasim: erste Version mit Datenbank, Bewertung und Filterung</li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                picturecount: 0,
                votingcount: 0,
                countbystars: [],
            };
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.error = this.topics = null;
                this.loading = true;
                axios
                    .get('/api/pictures/count')
                    .then(response => {
                        this.picturecount = response.data;
                    });
                axios
                    .get('/api/pictures/ratings/voting/counts')
                    .then(response => {
                        this.votingcount = response.data;
                    });
                axios
                    .get('/api/pictures/ratings/voting/1/count')
                    .then(response => {
                        this.$set(this.countbystars, 0, {stars: 1, value:  response.data});
                    });
                axios
                    .get('/api/pictures/ratings/voting/2/count')
                    .then(response => {
                        this.$set(this.countbystars, 1, {stars: 2, value:  response.data});
                    });
                axios
                    .get('/api/pictures/ratings/voting/3/count')
                    .then(response => {
                        this.$set(this.countbystars, 2, {stars: 3, value:  response.data});
                    });
                axios
                    .get('/api/pictures/ratings/voting/4/count')
                    .then(response => {
                        this.$set(this.countbystars, 3, {stars: 4, value:  response.data});
                    });
                axios
                    .get('/api/pictures/ratings/voting/5/count')
                    .then(response => {
                        this.$set(this.countbystars, 4, {stars: 5, value:  response.data});
                    });
            }
        }
    }
</script>
