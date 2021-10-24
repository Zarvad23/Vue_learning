let app = new Vue({
	el: "#app",
	data: {
		pages: {
			login: false,
			main: true,
			profile: false
		},
		active: 'active',
		userName: 'Аноним'
	},
	methods: {
		login () {
			this.pages.login = true,
			this.pages.main = false,
			this.pages.profile = false
		},
		main() {
			this.pages.main = true,
			this.pages.login = false,
			this.pages.profile = false
		},
		profile() {
			this.pages.profile = true,
			this.pages.main = false,
			this.pages.login = false
		}
	},	
})