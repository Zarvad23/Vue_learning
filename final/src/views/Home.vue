<template>
  <div class="container">
    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Актуальное</h2>
        <router-link to="/all-posts"><button class="btn btn-sm btn-primary">Все статьи</button></router-link>
      </div>

      <div class="row">
        <div v-for="post in actualPosts" :key="post.id" class="col-3">
          <div class="card">
            <img class="card-img-top" :src="post.image" :alt="post.name">
            <div class="card-body">
              <p class="card-text">
                <small class="text-muted">{{post.date}}</small>
              </p>

              <h5 class="card-title">{{post.name}}</h5>
              <p class="card-text">{{post.description.slice(0, 70) + '...'}}</p>

              <span @click="tooglePost(post)"><router-link class="btn btn-primary" to="/post">Читать</router-link></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Случайная статья</h2>
      </div>


      <span @click.prevent="tooglePost(randomPost)">
        <router-link class="card bg-dark text-white" to="/post">
        <img class="card-img" :src="randomPost.image">
        <div class="card-img-overlay">
          <h5 class="card-title">{{ randomPost.name }}</h5>
        </div>
        </router-link>
      </span>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    randomPost(){
      let allPosts = this.$store.getters.POSTS;
      return allPosts[Math.floor(Math.random() * this.$store.state.posts.length)]
    },
    actualPosts() {
      let allPosts = this.$store.getters.POSTS;
      return allPosts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }).slice(0, 4);
    }
  },
  methods: {
    tooglePost(post) {
      this.$store.dispatch('TOOGLE_POST', post)
    }
  }
}
</script>
