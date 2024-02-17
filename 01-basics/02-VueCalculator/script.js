// import { createApp } from './vendor/vue.esm-browser.js';
import { createApp } from './vendor/vue.esm-browser.js'

// Создайте Vue приложение
const calculatorOperators = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

createApp({
  data() {
    return {
      a: 10,
      b: 0,
      operator: 'sum',
    };
  },

  computed: {
    result() {
      return calculatorOperators[this.operator]?.(this.a, this.b);
    },
  },
}).mount('#app');
