<template>
  <div class="container">
    <div class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Управление статьями</h2>
        <router-link class="navbar-brand text-white" to="/add-post"><button class="btn btn-sm btn-success">Добавить статью</button></router-link>
      </div>

      <table class="table">
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Дата и время</th>
          <th>Действия</th>
        </tr>
        <tr v-for="(post, index) in allPosts" :key="post.id">
          <td>{{ index+1 }}</td>
          <td>{{ post.name }}</td>
          <td>{{ post.date }}</td>
          <td>
            <router-link to="/change-post"><button class="btn btn-primary btn-sm" @click="editPost(post)">Редактировать</button></router-link>
            <button class="btn btn-danger btn-sm" @click = "deletePost(post)">Удалить</button>
          </td>
        </tr>
      </table>
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
      },
    },
    methods: {
      editPost(post){
        this.$store.dispatch('TOOGLE_POST', post)
      },
      deletePost(post){
        this.$store.dispatch('DELETE_POST', post)
      }
    }
  }

</script>