let app = Vue.createApp({
	data () {
		return {
			message: 'Vue 3 запущен!',
			showMessage: false
		}
	},
})

app.mount('#app')