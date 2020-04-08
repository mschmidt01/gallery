<template>
    <div>
        <h1 class="title">Gallery </h1>
        <section>
            <button type="button" class="w-100 btn filter-button dropdown-toggle" data-toggle="collapse"
                    data-target="#filter-panel" aria-expanded="false">
                Filteroptionen
            </button>
            <div id="filter-panel" class="collapse w-100 container p-3">
                <div class="row">
                    <div class="col-2"><strong>Topic</strong></div>
                    <div class="col-10">
                        <div class=" form-check form-check-inline" v-for="topic in filters.topics">
                            <input class="form-check-input" type="checkbox" v-bind:value="topic" :id="topic"
                                   v-model="topicfilter"
                                   v-on:change="filterPictures()">
                            <label class="form-check-label" :for="topic">{{topic}}</label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-2"><strong>Modul</strong></div>
                    <div class="col-10">
                        <div class=" form-check form-check-inline" v-for="filtername in filters.modules">
                            <input class="form-check-input" type="checkbox" v-bind:value="filtername" :id="filtername"
                                   v-model="modulfilter"
                                   v-on:change="filterPictures()">
                            <label class="form-check-label" :for="filtername">{{filtername}}</label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-2"><strong>Semester</strong></div>
                    <div class="col-10">
                        <div class=" form-check form-check-inline" v-for="semester in filters.classes">
                            <input class="form-check-input" type="checkbox" v-bind:value="semester" :id="semester"
                                   v-model="classfilter"
                                   v-on:change="filterPictures()">
                            <label class="form-check-label" :for="semester">{{semester}}</label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-2"><strong>Sterne</strong></div>
                    <div class="col-10">
                        <div class=" form-check form-check-inline" v-for="index in 5">
                            <input class="form-check-input" type="checkbox" v-bind:value="index" :id="index"
                                   v-model="starfilter"
                                   v-on:change="filterPictures()">
                            <label class="form-check-label" :for="index">{{index}} <span
                                class="fa fa-star"></span></label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-2"><span class="inline-block align-center"><strong>Sortierung</strong></span></div>
                    <div class="col-10">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-secondary" v-on:click="sort($event,sortOptions[0])">
                                Alphabet
                            </button>
                            <button type="button" class="btn btn-secondary" v-on:click="sort($event,sortOptions[1])">
                                Datum
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <div class="row" v-for="(image, index) in filtered">
                    <img height="42" width="42" :src="'/img/gallery/' +  image.Path + '/'+ image.Filename "/>
                    <!-- Debugging{{image.Gallery}},{{image.THMModule}},{{image.Class}},{{image.Filename}},{{image.Timestamp}},{{image.Votes}},{{image.Rating}},Bewertung:{{image.Rating/image.Votes}}-->
                    Kommentare:
                    <div v-for="comment in image.comments">
                        <p>{{comment.Text}}</p>
                        <br>
                    </div>
                    <star-rating :round-start-rating="false" :rating="image.Rating/image.Votes" :show-rating="false"
                                 @rating-selected="setRating(image.PID,$event)"></star-rating>
                    <input type="text" :id="'comment_' + image.PID">
                    <button v-on:click="commentPicture(image.PID)">Kommentieren</button>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"] + label::before {
        width: 15px;
        height: 15px;
        border: 2px solid blue;
        background-color: #fff;
        display: block;
        content: "";
        float: left;
        margin-right: 5px;
        margin-top: 5px;
        cursor: pointer;
    }


    input[type="checkbox"]:checked + label::before {
        box-shadow: inset 0px 0px 0px 2px #fff;
        background-color: blue;
    }

    #filter-panel {
        background-color: white;
        border: 1px solid #343a40;
    }

    .filter-button {
        background-color: #343A40;
        color: white;
        border-radius: 0px;
        height: 50px;
    }

    .filter-button:focus {
        box-shadow: none;
    }

    .fa-star {
        color: #343a40;
    }

    .btn-secondary:active {
        background-color: #343a40;
    }

    .btn-secondary:hover {
        background-color: #343a40;
    }
</style>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                loading: false,
                error: null,
                topic: null,
                topics: [],
                pictures: null,
                filtered: null,
                filters: [],
                gallery: null,
                comments: [],
                topicfilter: [],
                modulfilter: [],
                classfilter: [],
                starfilter: [],
                sortOptions: ["alphabetical", "date"],
                filterType: ["modules", "classes"]

            };
        },
        created() {
            this.topic = this.$route.params.name;
            if (typeof this.$route.params.name !== 'undefined') {
                this.topicfilter[0] = this.topic;
            }
            if (typeof this.$route.params.stars !== 'undefined') {
                this.starfilter[0] = this.$route.params.stars;
            }
            this.fetchData();
        },
        methods: {
            setRating: function (id, rating) {
                this.rateAndValidate(id, rating);

            },
            commentPicture: function (id) {
                let text = document.getElementById("comment_" + id).value;
                this.commentAndValidate(id, text);
            },
            async rateAndValidate(id, rating) {
                // (optional) Wait until recaptcha has been loaded.
                await this.$recaptchaLoaded();

                // Execute reCAPTCHA with action "login".
                const token = await this.$recaptcha('starrating');
                axios.post('/api/pictures/vote', {
                    token: token,
                    imagid: id,
                    rating: rating,
                });
                this.fetchData();
                // Do stuff with the received token.
            },
            async commentAndValidate(id, text) {
                // (optional) Wait until recaptcha has been loaded.
                await this.$recaptchaLoaded();

                // Execute reCAPTCHA with action "login".
                const token = await this.$recaptcha('comment');
                axios.post('/api/pictures/comment', {
                    token: token,
                    imagid: id,
                    text: text,
                });
                this.fetchData();
                // Do stuff with the received token.
            },
            fetchData() {
                this.loading = true;
                let self = this;
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
                axios.get('/api/pictures/filter/topics', {})
                    .then(response => {
                        this.filters.topics = response.data;
                        if (typeof this.topic === 'undefined') {
                            this.topicfilter = response.data;
                        }
                    });
                axios.get('/api/pictures/ordered')
                    .then(response => {
                        this.loading = false;
                        let topic = this.topic;
                        self.pictures = $.map(response.data, function (value, key) {
                            return {[key]: value};
                        });
                        this.filtered = response.data[topic];
                        this.gallery = this.filtered;
                        if (typeof this.topicfilter !== 'undefined' && this.topicfilter.length > 0) {
                            var bucket = [];
                            for (let i = 0; i < this.topicfilter.length; i++) {
                                let images = self.pictures[i][this.topicfilter[i]];
                                bucket.push(...images);
                            }
                            this.filtered = bucket;
                        }
                        self.filterPictures();
                    });
            },
            filterPictures() {
                if (typeof this.modulfilter !== 'undefined' && this.modulfilter.length === 0
                    && typeof this.classfilter !== 'undefined' && this.classfilter.length === 0
                    && typeof this.starfilter !== 'undefined' && this.starfilter.length === 0
                    && typeof this.topicfilter !== 'undefined' && this.topicfilter.length === 0) {
                    this.filtered = [];
                    return false;
                }
                if (typeof this.topicfilter !== 'undefined' && this.topicfilter.length > 0) {
                    console.log("topic filter set");
                    var bucket = [];
                    for (var i = 0; i < this.topicfilter.length; i++) {
                        var topic = this.topicfilter[i];
                        for (var y = 0; y < this.pictures.length; y++) {
                            if (topic in this.pictures[y]) {
                                let images = this.pictures[y][topic];
                                bucket.push(...images);
                            }
                        }
                        this.filtered = bucket;
                    }
                }
                if (typeof this.modulfilter !== 'undefined' && this.modulfilter.length > 0) {
                    console.log("modul filter set");

                    var bucket = [];
                    for (let i = 0; i < this.modulfilter.length; i++) {
                        let images = this.filtered.filter(function (el) {
                            return el.THMModule === this.modulfilter[i];
                        }.bind(this));
                        bucket.push(...images);
                    }
                    this.filtered = bucket;
                }

                if (typeof this.classfilter !== 'undefined' && this.classfilter.length > 0) {
                    console.log("class filter set");

                    var bucket = [];
                    for (let i = 0; i < this.classfilter.length; i++) {
                        let images = this.filtered.filter(function (el) {
                            return el.Class === this.classfilter[i];
                        }.bind(this));
                        bucket.push(...images);
                    }
                    this.filtered = bucket;
                }

                if (typeof this.starfilter !== 'undefined' && this.starfilter.length > 0) {
                    console.log("star filter set");
                    console.log(this.filtered);
                    var bucket = [];
                    for (let i = 0; i < this.starfilter.length; i++) {
                        let images = this.filtered.filter(function (el) {
                            if (el.Votes === 0) {
                                return false;
                            }
                            return 2 * Math.abs(el.Rating / el.Votes - this.starfilter[i]) < 1;
                        }.bind(this));
                        bucket.push(...images);
                    }
                    this.filtered = bucket;
                }
                console.log(this.filtered);
                vm.$forceUpdate();
            },
            sort(event, name) {
                event.preventDefault();

                if (name === "alphabetical") {
                    this.filtered = this.filtered.sort(function (a, b) {
                        if (a.Filename < b.Filename) {
                            return -1;
                        }
                        if (a.Filename > b.Filename) {
                            return 1;
                        }
                        return 0;
                    });
                }

                if (name === "date") {
                    this.filtered = this.filtered.sort(function (a, b) {
                        return new Date(b.Timestamp) - new Date(a.Timestamp);
                    });
                }
            }
        }
    }
</script>
