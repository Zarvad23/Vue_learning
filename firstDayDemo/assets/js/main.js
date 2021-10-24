let app = new Vue({
	el: '#app',
	data: {
		courseName: 'Какое либо название',
		userName: 'Дорогой друг!',
		tasks: ['Задача 1', 'Задача 2', 'Человек паук'],
		forms: {
			input1: null,
			textarea: null,
			checkboxes: [],
			select: null
		},
		demoInput: {
			disabled: false,
			placeholder: "Новый placeholder",
			classes: []
		},
		showMessages: true
	},
	methods: {
		ClickByButton () {
			alert('Нажата кнопка')
		},
		formSubmitted () {
			alert('Вы отправили форму')
		}
	}
})

