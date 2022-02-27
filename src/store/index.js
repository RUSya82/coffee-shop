import Vue from 'vue';
import Vuex from 'vuex';

import coffee from "./coffee";
import goods from "./goods";
import bestsellers from "./bestsellers";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: [coffee,  goods, bestsellers]
});
export default store;