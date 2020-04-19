<template>
    <div v-on:scroll="alert()">
        <h1 class="title">Gallery</h1>
        <section>
            <button
                type="button"
                class="w-100 btn filter-button dropdown-toggle"
                data-toggle="collapse"
                data-target="#filter-panel"
                aria-expanded="false"
            >
                Filteroptionen
            </button>
            <div id="filter-panel" class="collapse w-100 container p-3">
                <div class="row">
                    <div class="col-md-2">
                        <strong>Topic</strong>
                    </div>
                    <div class="col-md-10">
                        <div
                            class="form-check form-check-inline"
                            v-for="topic in filters.topics"
                            :key="topic"
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                v-bind:value="topic"
                                :id="topic"
                                v-model="topicfilter"
                                v-on:change="filterPictures()"
                            />
                            <label class="form-check-label" :for="topic">{{
                                topic
                            }}</label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-md-2">
                        <strong>Modul</strong>
                    </div>
                    <div class="col-md-10">
                        <div
                            class="form-check form-check-inline"
                            v-for="filtername in filters.modules"
                            :key="filtername"
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                v-bind:value="filtername"
                                :id="filtername"
                                v-model="modulfilter"
                                v-on:change="filterPictures()"
                            />
                            <label class="form-check-label" :for="filtername">{{
                                filtername
                            }}</label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-md-2">
                        <strong>Semester</strong>
                    </div>
                    <div class="col-md-10">
                        <div
                            class="form-check form-check-inline"
                            v-for="semester in filters.classes"
                            :key="semester"
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                v-bind:value="semester"
                                :id="semester"
                                v-model="classfilter"
                                v-on:change="filterPictures()"
                            />
                            <label class="form-check-label" :for="semester">{{
                                semester
                            }}</label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-md-2">
                        <strong>Sterne</strong>
                    </div>
                    <div class="col-md-10">
                        <div
                            class="form-check form-check-inline"
                            v-for="index in 5"
                            :key="index"
                        >
                            <input
                                class="form-check-input"
                                type="checkbox"
                                v-bind:value="index"
                                :id="index"
                                v-model="starfilter"
                                v-on:change="filterPictures()"
                            />
                            <label class="form-check-label" :for="index">
                                {{ index }}
                                <span class="fa fa-star"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-md-2">
                        <span class="inline-block align-center">
                            <strong>Sortierung</strong>
                        </span>
                    </div>
                    <div class="col-md-10">
                        <div
                            class="btn-group sort-buttons"
                            role="group"
                            aria-label="Basic example"
                        >
                            <button
                                type="button"
                                class="btn btn-secondary"
                                v-on:click="sort($event, sortOptions[0])"
                                :class="{ 'active-button': !order }"
                            >
                                Alphabet
                            </button>
                            <button
                                type="button"
                                class="btn btn-secondary"
                                v-on:click="sort($event, sortOptions[1])"
                                :class="{ 'active-button': order }"
                            >
                                Datum
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <div
                    v-if="selectedImage"
                    class="modal fade bd-example-modal-lg"
                    id="imageDialog"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="imageDialog"
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">
                                    {{ selectedImage.Filename }}
                                </h5>
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <img
                                            width="100%"
                                            :src="
                                                '/img/gallery/' +
                                                    selectedImage.Path +
                                                    '/' +
                                                    selectedImage.Filename
                                            "
                                            id="exampleModalLabel"
                                        />
                                    </div>
                                    <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                                        <h5>Bewertungen</h5>
                                        <star-rating
                                            class="mb-2 stars"
                                            :round-start-rating="false"
                                            :rating="
                                                selectedImage.Rating /
                                                    selectedImage.Votes
                                            "
                                            v-bind:star-size="20"
                                            :show-rating="false"
                                            active-color="#343A40"
                                            inactive-color="#fff"
                                            border-color="#343A40"
                                            :border-width="2"
                                            :rounded-corners="true"
                                        ></star-rating>
                                        <div
                                            v-if="
                                                selectedImage.comments.length >
                                                    0
                                            "
                                            class="scroll-container"
                                        >
                                            <div
                                                v-for="comment in selectedImage.comments"
                                                :key="comment.Text"
                                            >
                                                <small>{{
                                                    comment.Text
                                                }}</small>
                                                <br />
                                            </div>
                                        </div>
                                        <hr />
                                        <h5>Eigene Bewertung abgeben</h5>
                                        <form>
                                            <star-rating
                                                class="mb-1 stars"
                                                :round-start-rating="false"
                                                :rating="0"
                                                v-bind:star-size="20"
                                                :show-rating="false"
                                                active-color="#343A40"
                                                inactive-color="#fff"
                                                border-color="#343A40"
                                                :border-width="2"
                                                :rounded-corners="true"
                                                @rating-selected="getRating"
                                            ></star-rating>
                                            <div class="form-group">
                                                <label
                                                    for="'comment_' + selectedImage.PID"
                                                    class="col-form-label"
                                                    >Kommentar:</label
                                                >
                                                <textarea
                                                    class="form-control"
                                                    :id="
                                                        'comment_' +
                                                            selectedImage.PID
                                                    "
                                                ></textarea>
                                                <div class="contact-field">
                                                    Bitte Feld leer lassen
                                                    <input
                                                        v-model="contact"
                                                        type="text"
                                                        name="contact"
                                                    />
                                                </div>
                                                <div
                                                    v-show="!hideInput"
                                                    class="text-field"
                                                >
                                                    Bitte Feld nicht ändern
                                                    <input
                                                        v-model="email"
                                                        type="text"
                                                        name="email"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-sec"
                                    data-dismiss="modal"
                                >
                                    Schließen
                                </button>
                                <button
                                    type="button"
                                    class="btn"
                                    v-on:click="
                                        commentPicture(selectedImage.PID);
                                        setRating(selectedImage.PID);
                                    "
                                >
                                    Bewerten
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row" v-if="loading">
                    <div
                        v-for="item in 50"
                        :key="item"
                        class="col-lg-1 col-md-2 col-3 py-2"
                    >
                        <skeleton-box
                            class="gallery-image"
                            width="100%"
                            style="margin: 0 !important; padding-top: 100%;"
                        />
                    </div>
                </div>
                <slot v-else />
                <div class="row" v-if="filtered && !loading">
                    <div
                        class="col-lg-1 col-md-2 col-3 py-2"
                        v-for="(image, index) in filtered"
                        v-if="index < showPictureAmount"
                        :key="index"
                    >
                        <a data-toggle="modal">
                            <img
                                loading="lazy"
                                class="gallery-image"
                                :src="
                                    '/img/gallery/' +
                                        image.Path +
                                        '/' +
                                        image.Filename.split('.')[0] +
                                        '-thumb.png'
                                "
                                alt="Some Image"
                                @click="openImageDialog(image)"
                            />
                            <!--<img loading="auto" class="gallery-image rounded" :src="'/img/gallery/' +  image.Path + '/'+ image.Filename "/>-->
                        </a>
                    </div>
                </div>

                <!--<div class="row" v-for="(image, index) in filtered">
                    <img height="42" width="42" :src="'/img/gallery/' +  image.Path + '/'+ image.Filename "/>
                    Kommentare:
                    <div v-for="comment in image.comments">
                        <p>{{comment.Text}}</p>
                        <br>
                    </div>
                    <star-rating :round-start-rating="false" :rating="image.Rating/image.Votes" :show-rating="false"
                                 @rating-selected="setRating(image.PID,$event)"></star-rating>
                    <input type="text" :id="'comment_' + image.PID">
                    <button v-on:click="commentPicture(image.PID)">Kommentieren</button>
        </div>-->
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
}
#filter-panel {
    background-color: white;
    border: 1px solid #343a40;
}
.filter-button {
    background-color: #343a40;
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
</style>

<script>
import axios from "axios";
export default {
    data() {
        const cookieArray = document.cookie.replace(" ", "").split(";");
        const recaptchaConsent = cookieArray.includes("recaptcha=true")
            ? true
            : false;

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
            rating: 0,
            order: false,
            recaptchaConsent,
            hideInput: true,
            contact: "",
            email: "test@email.com"
        };
    },
    created() {
        this.showPictureAmount = ((window.innerHeight - 280) / 66) * 12;
        window.addEventListener("scroll", () => {
            let offset =
                document.documentElement.scrollTop || document.body.scrollTop;
            this.showPictureAmount = ((window.innerHeight + offset) * 12) / 66;
            //console.log(this.showPictureAmount);
        });
        this.topic = this.$route.params.name;
        if (typeof this.$route.params.name !== "undefined") {
            this.topicfilter[0] = this.topic;
        }
        if (typeof this.$route.params.stars !== "undefined") {
            this.starfilter[0] = this.$route.params.stars;
        }
        this.fetchData();
    },
    methods: {
        openImageDialog: function(image) {
            console.log(image);
            this.selectedImage = image;
            $("#imageDialog").modal("show");
        },
        setRating: function(id) {
            this.rateAndValidate(id, this.rating);
        },
        getRating: function(rating) {
            this.rating = rating;
        },
        commentPicture: function(id) {
            let text = document.getElementById("comment_" + id).value;
            this.commentAndValidate(id, text);
        },
        async rateAndValidate(id, rating) {
            let token = "";

            if (this.recaptchaConsent) {
                // (optional) Wait until recaptcha has been loaded.
                try {
                    await this.$recaptchaLoaded();
                } catch (e) {
                    console.error(e);
                }
                // Execute reCAPTCHA with action "login".
                token = await this.$recaptcha("starrating");
            }

            axios.post("/api/pictures/vote", {
                token: token,
                imagid: id,
                rating: rating,
                email: this.email,
                contact: this.contact
            });
            this.fetchData();
            // Do stuff with the received token.
        },
        async commentAndValidate(id, text) {
            let token = "";

            if (this.recaptchaConsent) {
                // (optional) Wait until recaptcha has been loaded.
                try {
                    await this.$recaptchaLoaded();
                    // Execute reCAPTCHA with action "login".
                    token = await this.$recaptcha("comment");
                } catch (e) {
                    console.error(e);
                }
            }

            axios.post("/api/pictures/comment", {
                token: token,
                imagid: id,
                text: text
                    .replace(/"/g, '\\"')
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;"),
                email: this.email,
                contact: this.contact
            });

            this.fetchData();
            // Do stuff with the received token.
        },
        fetchData() {
            this.loading = true;
            let self = this;
            axios
                .post("/api/pictures/filter/modules", {
                    gallery: this.topic
                })
                .then(response => {
                    this.filters.modules = response.data;
                });
            axios
                .post("/api/pictures/filter/classes", {
                    gallery: this.topic
                })
                .then(response => {
                    this.filters.classes = response.data;
                });
            axios.get("/api/pictures/filter/topics", {}).then(response => {
                this.filters.topics = response.data;
                if (typeof this.topic === "undefined") {
                    this.topicfilter = response.data;
                }
            });
            axios.get("/api/pictures/ordered").then(response => {
                this.loading = false;
                let topic = this.topic;
                self.pictures = $.map(response.data, function(value, key) {
                    return { [key]: value };
                });
                this.filtered = response.data[topic];
                this.gallery = this.filtered;
                if (
                    typeof this.topicfilter !== "undefined" &&
                    this.topicfilter.length > 0
                ) {
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
            if (
                typeof this.modulfilter !== "undefined" &&
                this.modulfilter.length === 0 &&
                typeof this.classfilter !== "undefined" &&
                this.classfilter.length === 0 &&
                typeof this.starfilter !== "undefined" &&
                this.starfilter.length === 0 &&
                typeof this.topicfilter !== "undefined" &&
                this.topicfilter.length === 0
            ) {
                this.filtered = [];
                return false;
            }
            if (
                typeof this.topicfilter !== "undefined" &&
                this.topicfilter.length > 0
            ) {
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
            if (
                typeof this.modulfilter !== "undefined" &&
                this.modulfilter.length > 0
            ) {
                console.log("modul filter set");
                var bucket = [];
                for (let i = 0; i < this.modulfilter.length; i++) {
                    let images = this.filtered.filter(
                        function(el) {
                            return el.THMModule === this.modulfilter[i];
                        }.bind(this)
                    );
                    bucket.push(...images);
                }
                this.filtered = bucket;
            }
            if (
                typeof this.classfilter !== "undefined" &&
                this.classfilter.length > 0
            ) {
                console.log("class filter set");
                var bucket = [];
                for (let i = 0; i < this.classfilter.length; i++) {
                    let images = this.filtered.filter(
                        function(el) {
                            return el.Class === this.classfilter[i];
                        }.bind(this)
                    );
                    bucket.push(...images);
                }
                this.filtered = bucket;
            }
            if (
                typeof this.starfilter !== "undefined" &&
                this.starfilter.length > 0
            ) {
                console.log("star filter set");
                console.log(this.filtered);
                var bucket = [];
                for (let i = 0; i < this.starfilter.length; i++) {
                    let images = this.filtered.filter(
                        function(el) {
                            if (el.Votes === 0) {
                                return false;
                            }
                            return (
                                2 *
                                    Math.abs(
                                        el.Rating / el.Votes -
                                            this.starfilter[i]
                                    ) <
                                1
                            );
                        }.bind(this)
                    );
                    bucket.push(...images);
                }
                this.filtered = bucket;
            }
            console.log(this.filtered);
            vm.$forceUpdate();
        },
        sort(event, name) {
            console.log("SORT");

            event.preventDefault();
            if (name === "alphabetical") {
                this.order = false;

                this.filtered = this.filtered.sort(function(a, b) {
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
                this.order = true;

                this.filtered = this.filtered.sort(function(a, b) {
                    return new Date(b.Timestamp) - new Date(a.Timestamp);
                });
            }
        }
    }
};
</script>
