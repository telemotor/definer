import Vue from 'vue'
import App from './App.vue'

let bodyStyle = document.body.currentStyle || window.getComputedStyle(document.body);
document.body.style.marginTop = parseInt(bodyStyle.marginTop) + 50 + "px";

let container = document.createElement('div');
container.id = "telemotor-container";
container.style = "margin-top: -50px";
document.body.appendChild(container);

new Vue({
  el: '#telemotor-container',
  render: h => h(App)
})
