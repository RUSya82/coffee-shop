<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <nav-link-component
        :link="headerLinks.header.src"
        :class-name="headerLinks.classNav"
      >
          <img :src="require(`@/assets/logo/${headerLinks.header.icon}`)" :alt="headerLinks.header.icon">
      </nav-link-component>
      <nav-link-component
          v-for="item in headerLinks.other"
          :link="item.src"
          :class-name="headerLinks.classNav"
          :text="item.text"
          :key="item.id"
      />

    </ul>
  </header>
</template>
<script>
import NavLinkComponent from "./NavLinkComponent";

export default {
  components: {NavLinkComponent},
  data() {
    return {
      headerLinks: {
        classNav: 'header__item',
        header: {
          id: 0,
          src: '/',
          icon: 'Logo.svg'
        },
        other: [
          {
            id: 1,
            src: '/our-coffee',
            text: 'Our coffee'
          },
          {
            id: 2,
            src: '/goods',
            text: 'For your pleasure'
          },
          {
            id: 3,
            src: '/contacts',
            text: 'Contact us'
          },
        ]
      }
    }
  }
}
</script>