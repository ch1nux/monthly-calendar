import Vue from 'vue'
import App from './App.vue'

// Instancia del bus de eventos
export const Bus = new Vue({})

new Vue({
  el: '#app',
  render: h => h(App)
})
