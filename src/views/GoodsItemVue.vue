<template>
  <main>
    <div class="banner" :class="pageName === 'goods' ? 'goodspage-banner' : 'coffepage-banner' ">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component/>
          </div>
        </div>
        <h1 class="title-big" v-if="product">{{product.name}}</h1>
      </div>
    </div>
    <spinner-component v-if="isLoading || !product"/>
    <section class="shop" v-else>

      <div class="container" >
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img class="shop__girl" :src="`${product.image}`" alt="coffee_item" width="100%">
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img class="beanslogo" :src="require(`@/assets/logo/Beans_logo_dark.svg`)" alt="Beans logo">
            <div class="shop__point">
              <span>Country:</span>
              {{product.country}}
            </div>
            <div class="shop__point">
              <span>Description:</span>
              {{product.description}}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>


  </main>
</template>
<script>
import NavbarComponent from "../components/NavbarComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import {loading} from "../mixins/loading";

export default {
  data(){
    return {
      product: null
    }
  },
  components: {SpinnerComponent, NavbarComponent},
  computed: {
    pageName(){
      return this.$route.name;
    },

  },
  methods:{

  },
  beforeMount() {
    this.setIsLoading();
    fetch(`http://localhost:3000/${this.pageName}/${this.$route.params.id}`)
      .then(data => data.json())
      .then(data => {
        this.product = data;
      })
    .then(() => {
      setTimeout(() => this.setIsLoading(false), 500)

    })
  },
  destroyed() {
    this.product = null;
  },
  mixins: [loading]
}
</script>
