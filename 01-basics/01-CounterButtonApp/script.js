// import { createApp } from './vendor/vue.esm-browser.js';
import { createApp } from './vendor/vue.esm-browser.js'

// Создайте Vue приложение


createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count +=1
    }
  }
}).mount('#app');
