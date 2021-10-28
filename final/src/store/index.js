import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    toogledPost: null
  },
  getters: {
    POSTS: state => {
      return state.posts;
    },
    TOOGLED_POST: state => {
      return state.toogledPost;
    }
  },
  mutations: {
    TOOGGLE_POST (state, data) {
      state.toogledPost = data
    },
    ADD_POST (state, data) {
      state.posts.push(data)
    },
    CHANGE_POST (state, data) {
      state.posts[state.posts.findIndex(val =>val.id === data.id)] = data
    },
    DELETE_POST (state, data) {
      let f = state.posts.findIndex(val => val === data)
      state.posts.splice(f, 1)
    }
  },
  actions: {
    TOOGLE_POST: async(context, data) => {
      await context.commit('TOOGGLE_POST', data);
    },
    ADD_POST: async(context, data) => {
      await context.commit('ADD_POST', data);
    },
    CHANGE_POST: async(context, data) => {
      await context.commit('CHANGE_POST', data);
    },
    DELETE_POST: async(context, data) => {
      await context.commit('DELETE_POST', data);
    },
  },
  modules: {
  }
})
