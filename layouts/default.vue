<template>
  <div>
    <Header />
    <Nuxt />
    <Footer :class="{hide: routeCheckFooter, position: routeCheckFooter2 }"/>
  </div>
</template>

<script>
export default {
  computed: {
    routeCheckFooter() {
      const name = this.$route.name || ''
      if (name.includes('index') || !this.$route.name) {
        return true
      }
      return false
    },
    // routeCheckFooter2() {
    //   const name = this.$route.name || ''
    //   if (name.includes('kontakt') || !this.$route.name) {
    //     return true
    //   }
    //   return false
    // },
  }
}
</script>