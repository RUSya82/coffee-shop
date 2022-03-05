<template>
  <div class="shop__item" @click="onEmmit(good.id)">
    <img  :src="`${good.image}`" :alt="`coffee${good.image}`">
    <div class="shop__item-title">
      {{good.name}}
    </div>
    <div class="shop__item-country">{{good.country}}</div>
    <div class="shop__item-price">{{ good.price | addCurrency }}</div>
  </div>
</template>
<script>
export default {
  props: {
    good: {
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