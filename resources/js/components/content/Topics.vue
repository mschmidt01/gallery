<template>
    <div>
        <h1 class="title">Themen</h1>
        <section>
            <div class="row" v-if="topics">

                <div class="col-md" v-for="topic in topics">
                    <router-link :to="{name: 'gallery', params: {name: topic.name}}">
                        <div v-bind:style="{backgroundImage: 'url(/img/gallery/' +  topic.randomPicture}"></div>
                        <div><p></p><strong>Name:</strong> {{ topic.name }}
                            ({{ topic.count }})
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
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
<style>
    .row {
        text-align: center;
    }

    .col-md > a > div:first-child {
        height: 150px;
        background-size: cover;
        max-width: 150px;

        position: relative;
        margin: 0 auto;
    }
</style>
