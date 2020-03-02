<template>

    <div>
        <h1 class="title">Über die Website</h1>
        <section>
            <h2>Statistiken</h2>
            <div class="row">
                <div class="col-md-6 col-md-offset-1">
                    <table  class="table table-bordered table-hover">

                        <tr><td>Bilder</td><td> </td></tr>
                        <tr><td>Bewertungen</td><td> </td></tr>
                    </table>
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
                    .get('/api/pictures/ratings/counts')
                    .then(response => {
                        console.log(response)
                    });
                axios
                    .get('/api/pictures/ratings/voting/counts')
                    .then(response => {
                        console.log(response)
                    });
                axios
                    .get('/api/pictures/ratings/voting/2/count')
                    .then(response => {
                        console.log(response)
                    });
            }
        }
    }
</script>
