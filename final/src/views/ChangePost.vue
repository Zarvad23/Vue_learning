<template>
	<div class="container" v-if="toogledPost">
   <div class="py-5">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h2>Изменение статьи</h2>
      </div>

      <form @submit.prevent="changePost">

        <div class="mb-3">
          <label>Название</label>
          <input v-model="changedPostForm.name" type="text" class="form-control" placeholder="Придумайте название статьи">
        </div>
        <div class="mb-3">
          <label>Описание</label>
          <textarea v-model="changedPostForm.description" class="form-control" placeholder="Напишите описание статьи" rows="5"></textarea>
        </div>
        <div class="mb-4">
          <label>Изображение</label>
          <input @change="takeImg" type="file" class="form-control">

          <img  :src="changedImage !== null ? changedImage : toogledPost.image" class="w-100 mt-4" alt="preview">
        </div>

        <button class="btn btn-success">Сохранить</button>
      </form>
    </div> 
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        changedPostForm: {
          name: null,
          description: null,
          image: null
        },
        changedImage: null,
      }
    },
    computed: {
      toogledPost: function () {
        return this.$store.getters.TOOGLED_POST;
      }
    },
    methods: {
      changePost () {
        let data = this.toogledPost;
        if(this.changedPostForm.image !== null){
          data.image = this.changedPostForm.image;
        }
        if(this.changedPostForm.description !== null){
          data.description = this.changedPostForm.description;
        }
        if(this.changedPostForm.name !== null){
          data.name = this.changedPostForm.name;
        }
        this.$store.dispatch('CHANGE_POST', data);
      },
      takeImg(event){
        const reader = new FileReader();
        reader.onload = () => {
          this.changedImage = reader.result;
          this.changedPostForm.image = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }

</script>