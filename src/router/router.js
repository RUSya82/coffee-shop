import Vue from 'vue'
import VueRouter from "vue-router";
import HeroView from "../views/HeroView";
import OurCoffee from "../views/OurCoffee";
import ContactsView from "../views/ContactsView";
import GoodsPageView from "../views/GoodsPageView";
import ThanksPageView from "../views/ThanksPageView";
import PageNotFoundView from "../views/PageNotFoundView";


Vue.use(VueRouter);
const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffee },
    { path: '/contacts', component: ContactsView },
    { path: '/goods', component: GoodsPageView },
    { path: '/thanks', component: ThanksPageView },
    { path: '/:pathMatch(.*)*', component: PageNotFoundView }
]

const router = new VueRouter({
    mode: 'history',
    routes // сокращённая запись для `routes: routes`
});
export default router