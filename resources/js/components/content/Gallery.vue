<template>
    <div class="container-fluid">
        <h2>Gallery </h2>
        <div class="left">
            <ul>
                <a  v-for="filtername in filters" v-on:click="filter($event,filtername)" href="#">
                    <li>{{filtername}}</li>
                </a>
            </ul>
        </div>
        <div class="right">
            <ul>
                <a v-on:click="sort($event,sortOptions[0])" href="#">
                    <li>alphabetisch</li>
                </a>
                <a v-on:click="sort($event,sortOptions[1])" href="#">
                    <li>Datum</li>
                </a>
            </ul>
        </div>
        <div class="row">
                <div  v-for="(image, index) in filtered" v-if="(index % 5 == 0)" class="column">
                    <img  height="42" width="42" v-lazy="'/img/gallery/' +  image.Path + '/'+ image.Filename " />{{image.THMModule}},{{image.Filename}},{{image.Timestamp}}
                </div>
        </div>
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
                filtered: null,
                filters: null,
                gallery: null,
                sortOptions: ["alphabetical","date"]
            };
        },
        created() {
            this.topic = this.$route.params.name;
            if(this.topic === undefined){
                this.topic = "Buchstaben";
            }
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;

                axios.get('/api/pictures/ordered')
                     .then(response => {
                         this.pictures = response.data;
                         this.loading = false;
                         //console.log(this.pictures);
                         //console.log(this.topic);
                         let topic = this.topic;
                         this.filtered = response.data[topic];
                         this.gallery  = this.filtered;
                     });

                    axios.post('/api/pictures/filter', {
                        gallery: this.topic,
                    })
                    .then(response => {
                       this.filters = response.data;
                    });


            },
            filter(event,filter){
                event.preventDefault();
                this.filtered = this.gallery.filter(function (el) {
                    return el.THMModule === filter
                });
            },
            sort(event,name){
                event.preventDefault();
                console.log(name);
                if(name === "alphabetical"){
                    this.filtered = this.filtered.sort(function (a,b) {
                        if(a.Filename < b.Filename) { return -1; }
                        if(a.Filename > b.Filename) { return 1; }
                        return 0;
                    });
                }

                if(name === "date"){
                    this.filtered = this.filtered.sort(function (a,b) {
                        return new Date(b.Timestamp) - new Date(a.Timestamp);
                    });
                }
            }
        }
    }
</script>