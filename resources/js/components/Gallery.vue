<template>
    <div class="container-fluid">
        <h2>Gallery </h2>
        <ul v-if="filtered">
            <li v-for="image in filtered">
                <img  height="42" width="42" v-lazy="'/img/gallery/' +  image.Path + '/'+ image.Filename " />
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                loading: false,
                error: null,
                topic: null,
                pictures : null,
                filtered: null
            };
        },
        created() {
            this.fetchData();
            this.topic = this.$route.params.name;
            if(this.topic === undefined){
                this.topic = "Buchstaben";
            }
        },
        methods: {
            fetchData() {
                this.loading = true;

                 axios
                     .get('/api/pictures/ordered')
                     .then(response => {
                         this.pictures = response.data;
                         this.loading = false;
                         //console.log(this.pictures);
                         //console.log(this.topic);
                         let topic = this.topic;
                         this.filtered = response.data[topic];
                     });

            }
        }
    }
</script>