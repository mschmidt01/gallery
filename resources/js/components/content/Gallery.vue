<template>
    <div>
        <h1 class="title">Gallery </h1>
        <section>
            <!-- Filterbar -->
            <button type="button" class="w-100 btn filter-button dropdown-toggle" data-toggle="collapse"
                    data-target="#filter-panel" aria-expanded="false">
                Filteroptionen
            </button>
            <div id="filter-panel" class="collapse w-100 container p-3">
                <div class="row">
                    <div class="col-md-2 "><strong>Topic</strong></div>
                    <div class="col-md-10 ">
                        <div class=" form-check form-check-inline" v-for="topic in filters.topics">
                            <input class="form-check-input" type="checkbox" v-bind:value="topic" :id="topic"
                                   v-model="topicfilter"
                                   v-on:change="filterPictures()">
                            <label class="form-check-label" :for="topic">{{topic}}</label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-md-2"><strong>Modul</strong></div>
                    <div class="col-md-10">
                        <div class=" form-check form-check-inline" v-for="filtername in filters.modules">
                            <input class="form-check-input" type="checkbox" v-bind:value="filtername" :id="filtername"
                                   v-model="modulfilter"
                                   v-on:change="filterPictures()">
                            <label class="form-check-label" :for="filtername">{{filtername}}</label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-md-2"><strong>Semester</strong></div>
                    <div class="col-md-10">
                        <div class=" form-check form-check-inline" v-for="semester in filters.classes">
                            <input class="form-check-input" type="checkbox" v-bind:value="semester" :id="semester"
                                   v-model="classfilter"
                                   v-on:change="filterPictures()">
                            <label class="form-check-label" :for="semester">{{semester}}</label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-md-2"><strong>Sterne</strong></div>
                    <div class="col-md-10">
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
                    <div class="col-md-2"><span class="inline-block align-center"><strong>Sortierung</strong></span>
                    </div>
                    <div class="col-md-10">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-blue" v-on:click="sort($event,sortOptions[0])">
                                Alphabet
                            </button>
                            <button type="button" class="btn btn-blue" v-on:click="sort($event,sortOptions[1])">
                                Datum
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="mt-5">
                <div v-if="selectedImage" class="modal fade bd-example-modal-lg " id="imageDialog" tabindex="-1"
                     role="dialog"
                     aria-labelledby="imageDialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{{selectedImage.Filename}}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <img width="100%"
                                             :src="'/img/gallery/' +  selectedImage.Path + '/'+ selectedImage.Filename "
                                             id="exampleModalLabel"/>
                                    </div>
                                    <div class="col-12 col-lg-6 mt-3 mt-lg-0 ">
                                        <h5>Bewertungen</h5>
                                        <star-rating class="mb-2 stars" :round-start-rating="false"
                                                     :rating="selectedImage.Rating/selectedImage.Votes"
                                                     v-bind:star-size="20"
                                                     :show-rating="false" active-color="#343A40"
                                                     inactive-color="#fff"
                                                     border-color="#343A40" :border-width="2"
                                                     :rounded-corners="true"></star-rating>
                                        <div v-if="selectedImage.comments.length>0" class="scroll-container">
                                            <div v-for="comment in selectedImage.comments">
                                                <small>{{comment.Text}}</small>
                                                <br>
                                            </div>
                                        </div>
                                        <hr>
                                        <h5>Eigene Bewertung abgeben</h5>
                                        <form>
                                            <star-rating class="mb-1 stars" :round-start-rating="false" :rating="0"
                                                         v-bind:star-size="20"
                                                         :show-rating="false" active-color="#343A40"
                                                         inactive-color="#fff" border-color="#343A40"
                                                         :border-width="2"
                                                         :rounded-corners="true"
                                                         @rating-selected="getRating"></star-rating>
                                            <div class="form-group">
                                                <label for="'comment_' + selectedImage.PID" class="col-form-label">Kommentar:</label>
                                                <textarea class="form-control"
                                                          :id="'comment_' + selectedImage.PID"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-sec" data-dismiss="modal">Schließen</button>
                                <button type="button" class="btn btn-blue"
                                        v-on:click="commentPicture(selectedImage.PID); setRating(selectedImage.PID)">
                                    Bewerten
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Gallerie -->
                <div class="row">
                    <div class="col-lg-1 col-md-2 col-3 py-2" v-for="(image, index) in filtered"
                    >

                        <a data-toggle="modal">
                            <figure class="image__wrapper">
                                <img class="gallery-image"
                                     v-lazy="'/img/gallery/' +  image.Path + '/'+ image.Filename.split('.')[0] + '-thumb.png'"
                                     alt="Some Image" v-on:click="openImageDialog(image)">
                            </figure>
                        </a>
                    </div>

                </div>
            </div>
        </section>
        <button type="button" title="Scroll up" class="btn scroll-top fas fa-arrow-up shadow" id="scroll-btn"
                v-on:click="scrollUp()"></button>
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

    .gallery-image {
        width: 100%;

    }

    .scroll-container {
        height: 100px;
        overflow-y: scroll;
    }

    .scroll-top {
        position: fixed;
        bottom: 84px;
        right: 20px;
        z-index: 99;
        border: none;
        outline: none;
        background-color: blue;
        color: white;
        cursor: pointer;
        padding: 15px;
        border-radius: 50%;
    }

    .scroll-top:hover, .scroll-top:focus {
        background-color: #0000b7;
        color: white;
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
                filterType: ["modules", "classes"],
                showPictureAmount: 0,
                selectedImage: null,
                rating: 0
            };
        },
        created() {
            this.showPictureAmount = ((window.innerHeight - 280) / 66) * 12;
            this.topic = this.$route.params.name;
            if (typeof this.$route.params.name !== 'undefined') {
                this.topicfilter[0] = this.topic;
            }
            if (typeof this.$route.params.stars !== 'undefined') {
                this.starfilter[0] = this.$route.params.stars;
            }
            axios.get('/api/pictures/filter/topics', {})
                .then(response => {
                    this.filters.topics = response.data;
                    if (typeof this.topic === 'undefined') {
                        this.topicfilter = response.data;
                    }
                    this.fetchData();
                });


        },
        methods: {
            scrollUp: function () {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            },
            openImageDialog: function (image) {
                this.selectedImage = image;
                $('#imageDialog').modal('show');
            },
            setRating: function (id) {
                this.rateAndValidate(id, this.rating);
            },
            getRating: function (rating) {
                this.rating = rating;
            },
            commentPicture: function (id) {
                let text = document.getElementById("comment_" + id).value;
                this.commentAndValidate(id, text);
                $('#imageDialog').modal('hide');
            },
            async rateAndValidate(id, rating) {
                // (optional) Wait until recaptcha has been loaded.
                try {
                    await this.$recaptchaLoaded();
                } catch (e) {
                }

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
                try {
                    await this.$recaptchaLoaded();
                    // Execute reCAPTCHA with action "login".
                    const token = await this.$recaptcha('comment');
                    axios.post('/api/pictures/comment', {
                        token: token,
                        imagid: id,
                        text: text.replace(/"/g, '\\\"').replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                    });
                    this.fetchData();
                    // Do stuff with the received token.
                } catch (e) {
                }
            },
            fetchData() {

                this.loading = true;
                let self = this;
                axios.post('/api/pictures/filter/modules', {
                    galleries: this.topicfilter,
                })
                    .then(response => {
                        this.filters.modules = response.data;

                    });

                axios.post('/api/pictures/filter/classes', {
                    galleries: this.topicfilter,
                })
                    .then(response => {
                        this.filters.classes = response.data;
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
                axios.post('/api/pictures/filter/modules', {
                    galleries: this.topicfilter,
                })
                    .then(response => {
                        this.filters.modules = response.data;
                        this.$forceUpdate();
                    });

                axios.post('/api/pictures/filter/classes', {
                    galleries: this.topicfilter,
                })
                    .then(response => {
                        this.filters.classes = response.data;
                        this.$forceUpdate();
                    });

                if (typeof this.modulfilter !== 'undefined' && this.modulfilter.length === 0
                    && typeof this.classfilter !== 'undefined' && this.classfilter.length === 0
                    && typeof this.starfilter !== 'undefined' && this.starfilter.length === 0
                    && typeof this.topicfilter !== 'undefined' && this.topicfilter.length === 0) {
                    this.filtered = [];
                    return false;
                }
                if (typeof this.topicfilter !== 'undefined' && this.topicfilter.length > 0) {
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
