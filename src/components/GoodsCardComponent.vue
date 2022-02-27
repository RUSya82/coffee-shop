<template>
  <div class="shop__item">
    <img :src="require(`@/assets/img/${good.img}`)" :alt="`coffee${good.img}`">
    <div class="shop__item-title">
      {{good.text}}
    </div>
    <div class="shop__item-country">{{good.country}}</div>
    <div class="shop__item-price">{{ good.price }}</div>
  </div>
</template>
<script>
export default {
  props: {
    good: {
      type: Object,
      required: true
    }
  }
}
</script>