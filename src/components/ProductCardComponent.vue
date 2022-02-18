<template>
  <div class="best__item">
    <img :src="require(`@/assets/img/${product.img}`)" :alt="`coffee${product.img}`">
    <div class="best__item-title">
      {{product.text}}
    </div>
    <div class="best__item-price">{{product.price}}</div>
  </div>
</template>
<script>
  export default {
    props: ['product']
  }
</script>