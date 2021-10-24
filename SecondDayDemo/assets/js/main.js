Vue.component('counter', {
    template: `
        <div class="card" style="width: 10rem;">
          <div class="card-body d-flex flex-column align-items-center">
            <h2>{{ counter }}</h2>

            <div>
              <button class="btn btn-sm btn-primary" @click="changeCounter(-1)" :disabled="counter <= 0">-</button>
              <button class="btn btn-sm btn-primary" @click="changeCounter(1)">+</button>
            </div>
          </div>
        </div>
    `,
    data() {
        return {
            counter: 0
        }
    },
    methods: {
      changeCounter (value) {
            this.counter += value;
      }  
    }
})

Vue.component('card', {
    props: [ 'title' ],
    template: `
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <span>{{ title }}</span>
          <div>
            <slot name="contr"></slot>
          </div>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    `,
    data() {
        return {

        }
    }
})

Vue.component('pageIndex', {
    template: `
        <div>
            <h2>Главная страница</h2>
        </div>
    `,
    data() {
        return {

        }
    }
})

Vue.component('pageContact', {
    template: `
        <div>
            <h2>Контакты</h2>
        </div>
    `,
    data() {
        return {

        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        currentPage: 'pageContact'
    }
});