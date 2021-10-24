let app = new Vue({
	el: "#app",
	data: {
		todoList: [],
		dateFormat: 'hh:mm:ss',
		todoValue: '',
	},
	methods: {
		pushTodo () {
			if(this.todoValue.length > 0){
				let dateTime = new Date().toLocaleTimeString();
				this.todoList.unshift({ value: this.todoValue, 
									 time: dateTime
									});
				this.todoValue = '';
			}
		}
	}
})

