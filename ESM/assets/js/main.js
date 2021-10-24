import Vue from "./vue.esm.browser.js";
import { Counter } from "./components/card.js";
var app = new Vue({
	el: "#app",
	components: {
		counter: Counter
	},
	data: {
		message: 'ESM работает'
	}
})