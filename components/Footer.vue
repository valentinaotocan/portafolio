<template>
  <footer>
    <main>
      <section
        class="footer linear plr-custom txt-color-primary fs-base fw-normal"
      >
        <p>Sva prava pridržana. &copy; Valentina Otočan 2021.</p>
      </section>
    </main>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.hide {
  .footer {
    display: none;
  }
}
// .position {
//   .footer {
//     position: absolute;
//     bottom: 0;
//   }
// }
</style>
