<template>
  <div class="container" v-if="this.$store.getters.TOOGLED_POST">
    <div class="py-5">
      <h2 class="mb-4">{{ this.$store.state.toogledPost.name }}</h2>

      <img class="mb-4 w-100" :src="this.$store.getters.TOOGLED_POST.image" alt="placeholder">

      <p>
        {{ this.$store.getters.TOOGLED_POST.description }}
      </p>
    </div>
  </div>
</template>
