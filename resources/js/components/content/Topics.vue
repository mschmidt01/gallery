<template>
  <div>
    <h1 class="title">Themen</h1>
    <section>
      <!--<div class="row" v-if="topics">
                <div class="col-md" v-for="topic in topics">
                    <router-link :to="{name: 'gallery', params: {name: topic.name}}">
                        <div v-bind:style="{backgroundImage: 'url(/img/gallery/' +  topic.randomPicture}"></div>
                        <div><p></p><strong>Name:</strong> {{ topic.name }}
                            ({{ topic.count }})
                        </div>
                    </router-link>
                </div>
      </div>-->
      <div class="row" v-if="loading">
        <div
          v-for="count in topicCount"
          :key="count"
          class="col-sm-6 col-lg-3 d-flex align-items-stretch"
        >
          <skeleton-box class="card mb-4 shadow-sm" style="width: 18rem; height: 22rem" />
        </div>
      </div>
      <slot v-else />
      <div class="row" v-if="topics">
        <div
          class="col-sm-6 col-lg-3 d-flex align-items-stretch"
          v-for="topic in topics"
          :key="topic.name"
        >
          <div class="card mb-4 shadow-sm" style="width: 18rem;">
            <img
              v-bind:src="'/img/gallery/' +  topic.randomPicture"
              class="card-img-top"
              alt="Random Image of Topic"
            />
            <div class="card-body">
              <h5 class="card-title">{{ topic.name }}</h5>
              <p class="card-text text-center">
                <small>Anzahl: {{ topic.count }}</small>
              </p>
              <router-link
                :to="{name: 'gallery', params: {name: topic.name}}"
                class="btn btn-blue"
              >Anschauen</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      topics: null,
      error: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.topics = null;
      this.loading = true;
      this.topicCount = 4;
      axios.get("/api/topics/count").then(response => {
        this.topicCount = response.data;
      });
      axios.get("/api/topics").then(response => {
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
};
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
  margin: 0 auto; /* Added */
  float: none; /* Added */
}
</style>
