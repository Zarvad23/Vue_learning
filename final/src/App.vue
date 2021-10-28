<template>
  <div id="app">
    <header class="bg-primary text-white py-2">
      <div class="container d-flex justify-content-between">
        <router-link class="navbar-brand text-white" to="/">Статейка</router-link>

        <nav class="nav">
          <router-link class="nav-link text-white" to="/">Главная</router-link>
          <router-link class="nav-link text-white" to="/all-posts">Все статьи</router-link>
          <router-link class="nav-link text-white" to="/post-managment">Управление статьями</router-link>
        </nav>
      </div>
    </header>
    <transition name="fade" mode="out-in"><router-view/></transition>
  </div>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active{
    transition: .5s;
  }

  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
</style>