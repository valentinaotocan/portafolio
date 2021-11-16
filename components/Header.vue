<template>
  <main>
    <section class="header ptb-xl fs-base txt-color-secundary fw-medium">
      <div class="header__nav" :class="{ open: isMenuOpened }" @click="toggleMenu">
        <nuxt-link to="/" class="mr-xl underline">Naslovna</nuxt-link>
        <nuxt-link to="/o-meni" class="mr-xl underline">O meni</nuxt-link>
        <nuxt-link to="/iskustvo" class="mr-xl underline">Iskustvo</nuxt-link>
        <nuxt-link to="/kontakt" class="underline">Kontakt</nuxt-link>
      </div>

      <div
        class="hamburger hamburger--emphatic"
        :class="{ 'is-active': isMenuOpened }"
        @click="toggleMenu"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="js">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isMenuOpened: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  background: #fef7f1f5;
  z-index: 5;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  align-items: center;
  
  &__nav {
    @media (max-width: 1000px) {
      position: fixed;
      background: $primary-clr;
      width: 100%;
      height: 100%;
      right: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 5;
      opacity: 0;
      pointer-events: none;

      a {
        margin-right: 0;
        padding-top: 20px;
      }
    }
    &.open {
      opacity: 1;
      pointer-events: all;
    }
  }
}

// .nav.open {
//   opacity: 1;
//   pointer-events: all;
// }

.hamburger {
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    position: fixed;
    z-index: 10;
    top: 5px;
    right: 5%;
  }
}

.nuxt-link-exact-active {
  position: relative;
  padding-bottom: 2px;

  &:after {
    bottom: 0px;
    content: '';
    display: block;
    height: 4px;
    left: 0%;
    position: absolute;
    background: $secundary-clr;
    width: 100%;
  }
}

</style>
