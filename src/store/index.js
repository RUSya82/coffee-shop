import Vue from 'vue';
import Vuex from 'vuex';

import coffee from "./coffee";
import goods from "./goods";
import bestsellers from "./bestsellers";
import allData from "./allData";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: [coffee,  goods, bestsellers, allData]
});
export default store;