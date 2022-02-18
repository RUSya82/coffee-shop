<template>
  <li :class="className">
    <router-link :to="link">{{text}}<slot></slot></router-link>
  </li>
</template>
<script>
export default {
  props:{
    link:{
      required: true,
      type: String,
    },
    text:{
      required: false,
      type: String,
      default: ''
    },
    className:{
      required: true,
      default: 'header__item',
      type: String,
    }
  }
}
</script>