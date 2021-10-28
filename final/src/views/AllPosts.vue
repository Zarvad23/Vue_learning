<template>
  <div class="container">
    <div class="py-5">
      <div class="mb-4 d-flex  align-items-baseline">
        <h2>Все статьи</h2>
      </div>

      <div class="row">
        <div v-for = "post in allPosts" :key="post.id" class="col-3">
          <div class="card mb-4">
            <img class="card-img-top" :src="post.image" alt="placeholder">
            <div class="card-body">
              <p class="card-text">
                <small class="text-muted">{{ post.date }}</small>
              </p>

              <h5 class="card-title">{{ post.name }}</h5>
              <p class="card-text">{{ post.description.slice(0, 70) + '...'}}</p>

               <span @click="tooglePost(post)"><router-link class="btn btn-primary" to="/post">Читать</router-link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    computed: {
      allPosts () {
        let allPosts = this.$store.getters.POSTS;
        return allPosts.sort((a, b) => {
          return new Date(b.date) - new Date(a.date)
        })
      }
    },
    methods: {
      tooglePost(post) {
        this.$store.dispatch('TOOGLE_POST', post)
      }
    }
  }

</script>