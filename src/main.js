import Vue from 'vue'
import App from './App.vue'

// Instancia del bus de eventos
export const Bus = new Vue({})

// Función útil para generar rangos numéricos
export const range = (start, end, interval = 1) => {
	let r = []
	for (let i = start; i <= end; i += interval) {
		r.push(i);
	}
	return r;
}

new Vue({
  el: '#app',
  render: h => h(App)
})
