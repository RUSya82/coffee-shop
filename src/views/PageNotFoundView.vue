<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <navbar-component />
          </div>
        </div>
        <div class="row flex-column align-content-center mt-5">
          <h2 class="page-not-found text-center">Page Not found <span>404</span></h2>
          <p class="main-page-link">Please see <router-link to="/">main page</router-link></p>
        </div>
      </div>
    </div>
    <section class="best">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <product-card-component v-for="(item, index) in products" :key="item.id" :product="item"/>
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

export default {
  components: {ProductCardComponent, NavbarComponent},
  data(){
    return {
      products: [
        {
          id: 0,
          img: 'coffee-1.jpg',
          text: 'Solimo Coffee Beans 2kg',
          price: '10.73$'
        },
        {
          id: 1,
          img: 'coffee-2.jpg',
          text: 'Presto Coffee Beans 1kg',
          price: '33.34$'
        },
        {
          id: 2,
          img: 'coffee-3.jpg',
          text: 'AROMISTICO Coffee 1kg',
          price: '6.99$'
        },
      ]
    }
  }
}

</script>
<style scoped lang="scss">
.page-not-found {
  font-size: 34px;
  color: white;
  span {
    color: #ea0d27;
  }

}
.main-page-link{
  color: white;
  font-size: 28px;
  margin-top: 50px;
  a {
    color: inherit;
  }
}
</style>