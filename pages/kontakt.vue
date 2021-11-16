<template>
  <main>
    <section class="section contact plr-custom">
      <div class="contact__circle-top linear"></div>
      <div class="contact__circle-bottom linear"></div>
      <img
        src="~/assets/img/nofollow/pigeon.png"
        class="contact__image-pigeon png fromTop"
        v-in-viewport.once
        alt="Pigeon"
      />
      <img
        src="~/assets/img/nofollow/message-in-a-bottle.png"
        class="contact__image-bottle png fromTop"
        v-in-viewport.once
        alt="Message in a bottle"
      />
      <div class="contact__box linear fs-base fw-normal txt-color-primary">
        <div class="pb-sm">
          <span class="icon-mail pr-sm"></span>
          <a
            href="mailto:valentinaotocan@gmail.com"
            class="underline underline--primary-clr"
            >valentinaotocan@gmail.com</a
          >
        </div>
        <div>
          <span class="icon-mobile mr-sm"></span
          ><a href="telto:0919539093" class="underline underline--primary-clr"
            >0919539093</a
          >
        </div>
        <div class="pt-lg">
          <p class="pb-xs">Društvene mreže</p>
          <a
            href="https://www.facebook.com/valentinaotocan"
            rel="external"
            target="_blank"
            class="mr-sm social"
          >
            <span class="icon-facebook"></span>
          </a>
          <a
            href="https://www.instagram.com/valenia93"
            rel="external"
            target="_blank"
            class="mr-sm social"
          >
            <span class="icon-instagram"></span
          ></a>
          <a
            href="https://www.linkedin.com/in/valentina-otočan-5077a4218/"
            rel="external"
            target="_blank"
            class="social"
            ><span class="icon-linkedin"></span
          ></a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'Portfolio | Kontakt',
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;

  &__circle-top {
    width: 100px;
    height: 100px;
    border-radius: 0 0 100% 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
  }

  &__circle-bottom {
    width: 200px;
    height: 200px;
    border-radius: 100% 0 0 0;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &__image-pigeon {
    position: absolute;
    right: 19%;
    top: 120px;
  }
  &__image-bottle {
    position: absolute;
    bottom: 0;
    left: 12%;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 42px 32px;
    border-radius: 15px;
    width: 500px;
    margin-top: 100px;
    margin-bottom: 100px;
    @media (max-width: 600px) {
      width: 400px;
    }
    @media (max-width: 500px) {
      width: unset;
    }
    @media (max-width: 350px) {
      padding: 15px;
    }
  }
}

@media (max-width: 500px) {
  .contact__circle-bottom {
    width: 100px;
    height: 100px;
  }
}
</style>
