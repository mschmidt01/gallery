<template>
    <div class="container-fluid">
        <h2>Themen </h2>
        <ul v-if="topics">

            <div v-for="topic in topics">
                <router-link :to="{name: 'gallery', params: {name: topic.name}}">
                    <img v-bind:src="'/img/gallery/' +  topic.randomPicture " />
                    <div><p></p><strong>Name:</strong> {{ topic.name }}
                    ({{ topic.count }})</div>
                </router-link>
            </div>
        </ul>
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
               /* axios
                    .get('/api/pictures/ordered')
                    .then(response => {
                        this.loading = false;
                        this.pictures = response.data;
                        console.log(this.pictures)
                    });*/
            }
        }
    }
</script>