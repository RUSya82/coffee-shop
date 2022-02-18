<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
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
            <!--            <li class=" footer__item">-->
            <!--              <router-link :to="links[0].src">-->
            <!--                <img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon">-->
            <!--              </router-link>-->
            <!--            </li>-->
            <!--            <li class="footer__item">-->
            <!--              <router-link :to="links[1].src">{{links[1].text}}</router-link>-->
            <!--            </li>-->
            <!--            <li class="footer__item">-->
            <!--              <router-link :to="links[2].src">{{links[2].text}}</router-link>-->
            <!--            </li>-->
            <!--            <li class="footer__item">-->
            <!--              <router-link :to="links[3].src">{{links[3].text}}</router-link>-->
            <!--            </li>-->
          </ul>
        </div>
      </div>
      <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
    </div>
  </footer>
</template>
<script>
import NavLinkComponent from "./NavLinkComponent";

export default {
  components: {NavLinkComponent},
  data() {
    return {
      headerLinks: {
        classNav: 'footer__item',
        header: {
          id: 0,
          src: '/',
          icon: 'Logo_black.svg'
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