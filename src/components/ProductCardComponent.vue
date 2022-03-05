<template>
  <div class="best__item" @click="onEmmit(product.id)">
    <img :src="`${product.image}`" :alt="`coffee${product.image}`">
    <div class="best__item-title">
      {{product.name}}
    </div>
    <div class="best__item-price">{{product.price | addCurrency}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods:{
      onEmmit(id){
        this.$emit('onNavigate', id);
      }
    }
  }
</script>