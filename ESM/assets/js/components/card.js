export let Counter = {
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
}