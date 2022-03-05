<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component />
          </div>
        </div>
        <h1 class="title-big">Our Coffee</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl">
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br><br>
              Afraid at highly months do things on at. Situation recommend objection do intention<br>
              so questions. <br>
              As greatly removed calling pleased improve an. Last ask him cold feel<br>
              met spot shy want. Children me laughing we prospect answered followed. At it went<br>
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                  id="filter"
                  type="text"
                  placeholder="start typing here..."
                  class="shop__search-input"
                  v-model="searchValue"
              >
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label" @click="onSort('')">
                Or filter
              </div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">Brazil</button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">Kenya</button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card-component @onNavigate="navigate" v-for="(item, index) in getCoffee" :key="item.id" :product="item" :class="`shop__item`"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import NavbarComponent from "../components/NavbarComponent";
import ProductCardComponent from "../components/ProductCardComponent";
import {navigate} from "../mixins/navigate";
export default {
  components: {NavbarComponent, ProductCardComponent},
  data(){
    return {
      pageName: 'coffee'
    }
  },
  methods: {
    onSort(value){
      this.$store.dispatch('setSortValue', value)
    }
  },
  computed: {
      getCoffee(){
        return this.$store.getters['getCoffee'];
      },
      searchValue: {
        set(value){
          this.$store.dispatch('setSearchValue', value)
        },
        get(){
          return this.$store.getters['getSearchValue'];
        }
      }
  },
  mixins: [navigate],
  mounted() {
    fetch('http://localhost:3000/coffee/')
      .then(data => data.json())
      .then(data => {
        this.$store.dispatch('setCoffee', data)
      })
  }
}
</script>
