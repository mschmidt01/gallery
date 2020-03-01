<template>
    <div class="container-fluid">
        <h2>Gallery </h2>
        <div>
            <p>Module</p>
            <ul>
                <li  v-for="filtername in filters.modules">
                    <input type="checkbox" v-bind:value="filtername" :id="filtername" v-model="modulfilter"  v-on:change="filterPictures()">
                    <label :for="filtername" >{{filtername}}</label><br>
                </li>

            </ul>
        </div>
        <div>
            <p>Semester</p>
            <ul>
                <li  v-for="filtername in filters.classes">
                    <input type="checkbox" v-bind:value="filtername" :id="filtername" v-model="classfilter"  v-on:change="filterPictures()">
                    <label :for="filtername" >{{filtername}}</label><br>
                </li>
            </ul>
        </div>
        <div >
            <p>Sortieren nach:</p>
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
                    <img  height="42" width="42" v-lazy="'/img/gallery/' +  image.Path + '/'+ image.Filename " />{{image.THMModule}},{{image.Class}},{{image.Filename}},{{image.Timestamp}}
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
                filters: [],
                gallery: null,
                modulfilter : [],
                classfilter : [],
                sortOptions: ["alphabetical","date"],
                filterType: ["modules","classes"]

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
                         let topic = this.topic;
                         this.filtered = response.data[topic];
                         this.gallery  = this.filtered;
                     });

                    axios.post('/api/pictures/filter/modules', {
                        gallery: this.topic,
                    })
                    .then(response => {
                       this.filters.modules = response.data;
                    });

                axios.post('/api/pictures/filter/classes', {
                    gallery: this.topic,
                })
                    .then(response => {
                        this.filters.classes = response.data;
                    });
            },
            filterPictures(){
                if(typeof this.modulfilter !== 'undefined' && this.modulfilter.length === 0 && this.classfilter.length === 0){
                    this.filtered = this.gallery;
                    return;
                }
                let moduleImages = this.gallery;
                if(typeof this.modulfilter !== 'undefined' && this.modulfilter.length > 0){
                    moduleImages = [];
                    for (let i=0; i<this.modulfilter.length; i++) {
                        let images = this.gallery.filter(function (el) {
                            return el.THMModule === this.modulfilter[i];
                        }.bind(this));
                        moduleImages.push(...images);
                    }
                }
                this.filtered = moduleImages;
                var moduleandclass = [];
                if(typeof this.classfilter !== 'undefined' && this.classfilter.length > 0) {
                    for (let i = 0; i < this.classfilter.length; i++) {
                        let images = moduleImages.filter(function (el) {
                            return el.Class === this.classfilter[i];
                        }.bind(this));
                        moduleandclass.push(...images);
                    }
                    this.filtered = moduleandclass;
                }
            },
            sort(event,name){
                event.preventDefault();
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