<template>
  <div class="container-fluid">
    <h2>Gallery</h2>
    <div>
      <p>Themen</p>
      <ul>
        <li v-for="topic in filters.topics">
          <input
            type="checkbox"
            v-bind:value="topic"
            :id="topic"
            v-model="topicfilter"
            v-on:change="filterPictures()"
          />
          <label :for="topic">{{topic}}</label>
          <br />
        </li>
      </ul>
    </div>
    <p>Filter:</p>
    <div>
      <p>Module</p>
      <ul>
        <li v-for="filtername in filters.modules">
          <input
            type="checkbox"
            v-bind:value="filtername"
            :id="filtername"
            v-model="modulfilter"
            v-on:change="filterPictures()"
          />
          <label :for="filtername">{{filtername}}</label>
          <br />
        </li>
      </ul>
    </div>
    <div>
      <p>Semester</p>
      <ul>
        <li v-for="filtername in filters.classes">
          <input
            type="checkbox"
            v-bind:value="filtername"
            :id="filtername"
            v-model="classfilter"
            v-on:change="filterPictures()"
          />
          <label :for="filtername">{{filtername}}</label>
          <br />
        </li>
      </ul>
    </div>
    <div>
      <p>Sterne</p>
      <ul>
        <li v-for="index in 5" :key="index">
          <input
            type="checkbox"
            v-bind:value="index"
            v-model="starfilter"
            v-on:change="filterPictures()"
          />
          <label>{{index}}</label>
          <br />
        </li>
      </ul>
    </div>
    <div>
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
    <div class="row" v-for="(image, index) in filtered">
      <img height="42" width="42" :src="'/img/gallery/' +  image.Path + '/'+ image.Filename " />
      <!-- Debugging{{image.Gallery}},{{image.THMModule}},{{image.Class}},{{image.Filename}},{{image.Timestamp}},{{image.Votes}},{{image.Rating}},Bewertung:{{image.Rating/image.Votes}}-->
      Kommentare:
      <div v-for="comment in image.comments">
        <p>{{comment.Text}}</p>
        <br />
      </div>
      <star-rating
        :round-start-rating="false"
        :rating="image.Rating/image.Votes"
        :show-rating="false"
        @rating-selected="setRating(image.PID,$event)"
      ></star-rating>
      <input type="text" :id="'comment_' + image.PID" />
      <button v-on:click="commentPicture(image.PID)">Kommentieren</button>
    </div>
  </div>
</template>
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
      recaptchaConsent
    };
  },
  created() {
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
    setRating: function(id, rating) {
      this.rateAndValidate(id, rating);
    },
    commentPicture: function(id) {
      let text = document.getElementById("comment_" + id).value;
      this.commentAndValidate(id, text);
    },
    async rateAndValidate(id, rating) {
      let token = "";

      if (this.recaptchaConsent) {
        // (optional) Wait until recaptcha has been loaded.
        await this.$recaptchaLoaded();

        // Execute reCAPTCHA with action "login".
        token = await this.$recaptcha("starrating");
      }
      
      axios.post("/api/pictures/vote", {
        token: token,
        imagid: id,
        rating: rating
      });

      this.fetchData();
      // Do stuff with the received token.
    },
    async commentAndValidate(id, text) {
      let token = "";

      if (this.recaptchaConsent) {
        // (optional) Wait until recaptcha has been loaded.
        await this.$recaptchaLoaded();

        // Execute reCAPTCHA with action "login".
        token = await this.$recaptcha("comment");
      }

      axios.post("/api/pictures/comment", {
        token: token,
        imagid: id,
        text: text
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
                2 * Math.abs(el.Rating / el.Votes - this.starfilter[i]) < 1
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
      event.preventDefault();

      if (name === "alphabetical") {
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
        this.filtered = this.filtered.sort(function(a, b) {
          return new Date(b.Timestamp) - new Date(a.Timestamp);
        });
      }
    }
  }
};
</script>