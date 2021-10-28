import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/all-posts',
    name: 'AllPosts',
    component: () => import(/* webpackChunkName: "allPosts" */ '../views/AllPosts.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue')
  },
  {
    path: '/post-managment',
    name: 'PostManagment',
    component: () => import(/* webpackChunkName: "postManagment" */ '../views/PostManagment.vue')
  },
  {
    path: '/add-post',
    name: 'AddPost',
    component: () => import(/* webpackChunkName: "addPost" */ '../views/AddPost.vue')
  },
  {
    path: '/change-post',
    name: 'ChangePost',
    component: () => import(/* webpackChunkName: "changePost" */ '../views/ChangePost.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
