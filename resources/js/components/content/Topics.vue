<template>
  <div class="container-fluid">
    <h2>Themen</h2>
    <template v-if="loading">
      <div v-for="count in topicCount" :key="count">
        <skeleton-box width="100px" height="100px" />
        <skeleton-box width="200px" />
      </div>
    </template>
    <slot v-else />
    <ul v-if="topics">
      <div v-for="topic in topics" :key="topic.name">
        <router-link :to="{name: 'gallery', params: {name: topic.name}}">
          <img height="100" width="100" v-bind:src="'/img/gallery/' +  topic.randomPicture " />
          <div>
            <p></p>
            <strong>Name:</strong>
            {{ topic.name }}
            ({{ topic.count }})
          </div>
        </router-link>
      </div>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      topics: null,
      topicCount: null,
      error: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.topics = null;
      this.topicCount = 3;
      this.loading = true;
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