<template>
	<div class="container">
   <div class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Добавление статьи</h2>
      </div>

      <form @submit.prevent="addPost()">

        <div class="mb-3">
          <label>Название</label>
          <input v-model="postForm.name" type="text" class="form-control" placeholder="Придумайте название статьи">
        </div>
        <div class="mb-3">
          <label>Описание</label>
          <textarea v-model="postForm.description" class="form-control" placeholder="Напишите описание статьи" rows="5"></textarea>
        </div>
        <div class="mb-4">
          <label>Изображение</label>
          <input @change="getImage" type="file" class="form-control">

          <img :src="importedImage ? importedImage : defaultImage" class="w-100 mt-4" alt="preview">
        </div>

        <button class="btn btn-success">Добавить статью</button>
      </form>
    </div> 
  </div>
</template>

<script>
  
  export default {
    data () {
      return {
        postForm: {
          date: null,
          description: null,
          id: null,
          image:null,
          name: null
        },
        importedImage: null,
        defaultImage: require('../assets/images/placeholder-blue.png')
      }
    },
    methods: {
      addPost(){
        this.postForm.date =new Date().toLocaleDateString('ko-KR') + ' ' + new Date().toLocaleTimeString('en-US')
        this.postForm.id = Math.random()
        this.$store.dispatch('ADD_POST', this.postForm);
      },
      getImage(event){
        const reader = new FileReader();
        reader.onload = () => {
          this.importedImage = reader.result;
          this.postForm.image = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }     
    }
  }

</script>