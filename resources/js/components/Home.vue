<template>
    <div class="container-fluid">
        <h2>Themen </h2>
        <ul v-if="topics">
            <li v-for="{ gallery } in topics">
                <strong>Name:</strong> {{ gallery }}
            </li>
        </ul>
        <p><b>Daten für Bilder-Gallerie in this.pictures verfügbar, siehe console.</b></p>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                loading: false,
                topics: null,
                error: null,
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
                    .get('/api/topics')
                    .then(response => {
                        this.loading = false;
                        this.topics = response.data;
                        console.log(this.topics)
                    });
                axios
                    .get('/api/pictures/ordered')
                    .then(response => {
                        this.loading = false;
                        this.pictures = response.data;
                        console.log(this.pictures)
                    });
            }
        }
    }
</script>