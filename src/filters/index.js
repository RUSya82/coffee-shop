import Vue from 'vue'

Vue.filter('addCurrency', (val) => {
    return val + '$';
})