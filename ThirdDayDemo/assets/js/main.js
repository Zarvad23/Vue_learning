const host = 'http://127.0.0.1:8000/api'

const app = new Vue({
  el: '#app',
  data: {
    page: 'index',
    toasts: [],
    posts: [],
    registerForm: {
      name: null,
      login: null,
      password: null
    },
    loginForm: {
      login: null,
      password: null
    },
    user: null,
    postForm: {
      name: null,
      text: null,
      image: null
    },
    commentForm: {
      text: null
    },
    userPosts: [],
    post: {
      name: 'Имя поста',
      text: 'Текст поста',
      image: ''
    }
  },
  mounted(){
    this.getAllPosts();
    this.loadLocalData();
  },
  methods: {
    openPage(pageName) {
      this.page = pageName;
    },
    showToast(text, classes, duration = 2000) {
      const toast = { text, classes, id: Math.random() };

      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts.splice(this.toasts.indexOf(toast), 1);
      }, duration);
    },
    getAllPosts () {
      fetch(host + '/post')
          .then(res => res.json())
          .then(data => this.posts = data);
    },
    register() {
      fetch(host + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.registerForm)
      })
          .then(res => {
            if(res.status === 201){
              this.showToast('Вы успешно зарегистрировались!', ['alert-success']);
              this.openPage('login')
            }
            else
              this.showToast('Что-то пошло не так', ['alert-danger']);
          })
    },
    login(){
      fetch(host + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.loginForm)
      })
          .then(res => {
            if(res.status === 200)
              this.showToast('Вы успешно авторизировались!', ['alert-success']);
            else
              this.showToast('Вы ввели неверные данные', ['alert-danger']);

            return res.json()
          })
          .then(data => {
            this.user = data;
            this.saveLocalData();
            this.openPage('profile')
          })
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      this.showToast('Вы успешно вышли', ['alert-success'])
    },
    saveLocalData() {
      localStorage.setItem('user', JSON.stringify(this.user));
    },
    loadLocalData() {
      this.user = JSON.parse(localStorage.getItem('user'))
    },
    fileSelected() {
      if(event.target.files.length)
        this.postForm.image = event.target.files[0];
    },
    createPost() {
      let formData = new FormData();
      formData.append('name', this.postForm.name);
      formData.append('text', this.postForm.text);
      formData.append('image', this.postForm.image);

      fetch(host + '/post', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.user.token}`
        },
        body: formData
      })
        .then(res => {
          if(res.status === 201){
            this.showToast('Вы успешно создали пост', ['alert-success']);
            this.getAllPosts();
            this.openPage('profile');
          }
          else
            this.showToast('Форма заполнена неверно', ['alert-danger']);

            return res.json()
        })
    },
    getAllUserPosts () {
      fetch(host + '/my-post',{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.user.token}`
        }
      })
          .then(res => res.json())
          .then(data => {
            this.userPosts = data;
            this.openPage('profile');
          })
    },
    readPost(id) {
      fetch(host + '/post/' + id)
        .then(res => res.json())
        .then(data => this.post = data);
      this.openPage('post')
    },
    sendComment () {
      fetch(host + '/post/' + this.post.id + '/comment', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.user.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.commentForm)
      })
          .then(res => {
            if(res.status === 201){
            this.showToast('Вы успешно отправили комментарий', ['alert-success']);
          }
          else
            this.showToast('Что-то пошло не так', ['alert-danger']);
          })
    }
  }
});