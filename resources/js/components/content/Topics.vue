<template>
    <div>
        <h1 class="title">Themen</h1>
        <section>
            <div class="row" v-if="topics">
                <div class="col-sm-6 col-lg-3 d-flex align-items-stretch" v-for="topic in topics">
                    <div class="card mb-4 shadow-sm" style="width: 18rem;">
                        <img v-bind:src="'/img/gallery/' +  topic.randomPicture" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ topic.name }}</h5>
                            <p class="card-text text-center"><small>Anzahl: {{ topic.count }}</small></p>
                            <router-link :to="{name: 'gallery', params: {name: topic.name}}" class="btn btn-blue">
                                Anschauen
                            </router-link>
                        </div>
                    </div>
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
            }
        }
    }
</script>
<style scoped>
    .row {
        text-align: center;
    }

    .card-img-top {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .card {
        min-width: 200px;
        margin: 0 auto;
        float: none;
    }
</style>
