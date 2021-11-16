<template>
  <main>
    <section class="home plr-small">
      <div class="home__circle linear"></div>
      <div class="home__circle--smaller linear"></div>
      <div class="home__picture">
        <img
          src="~/assets/img/valentina-otocan.jpeg"
          loading="lazy"
          class="home__picture__me img-contain border-img"
          alt="Valentina Otočan"
        />
        <img
          src="~/assets/img/nofollow/pet.png"
          loading="lazy"
          class="home__picture__pet img-contain png fromTop"
          v-in-viewport
          alt="Pet"
        />
        <img
          src="~/assets/img/nofollow/work.png"
          loading="lazy"
          class="home__picture__work img-contain png fromTop"
          v-in-viewport
          alt="Work"
        />
        <img
          src="~/assets/img/nofollow/ecology.png"
          loading="lazy"
          class="home__picture__ecology img-contain png fromTop"
          v-in-viewport
          alt="Ecology"
        />
      </div>
      <div class="home__text fromTop" v-in-viewport>
        <h1 class="fs-xxl pb-sm">Valentina Otočan</h1>
        <h2 class="fs-xl">Frontend developer</h2>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Portfolio | Naslovna',
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  height: 100%;
  overflow-y: hidden;
  &__picture {
    position: relative;
    width: 50%;
    padding-top: 30px;
    &__me {
      max-height: 70vh;
    }
    &__ecology {
      position: absolute;
      top: 18px;
      left: 19%;
      display: block;
    }
    &__work {
      position: absolute;
      right: 7%;
      top: 257px;
    }
    &__pet {
      position: absolute;
      bottom: 42px;
      left: 14%;
    }
  }
  &__text {
    color: #0082c8;
    width: 50%;
  }
  &__circle {
    width: 250px;
    height: 250px;
    border-radius: 100% 0 0 0;
    position: absolute;
    bottom: 0px;
    right: 0px;
    &--smaller {
      border-radius: 0 0 100% 0;
      width: 150px;
      height: 150px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 500;
    }
  }
}

@media (max-width: 1600px) {
  .home__picture__ecology {
    left: 16%;
  }
  .home__picture__pet {
    left: 6%;
  }
  .home__picture__work {
    right: -3%;
  }
}

@media (max-width: 1460px) {
  .home__text {
    padding-left: 5%;
  }
  .home__circle {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 1000px) {
  .home {
    position: relative;
    flex-direction: column;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 80px;
    &__circle {
      width: 100px;
      height: 100px;
    }
    &__picture {
      padding-top: 0;
      width: 65%;
      &__ecology {
        left: 2%;
      }
      &__pet {
        left: 0;
      }
    }
    &__text {
      padding-top: 30px;
      width: 100%;
      padding-left: 0;
    }
  }
}

@media (max-width: 800px) {
  .home__picture {
    width: 80%;
  }
  .home__picture__work {
    right: -8%;
    top: 200px;
  }
}

@media (max-width: 500px) {
  .home__picture {
    width: 100%;
    &__ecology {
      display: none;
    }
    &__pet {
      bottom: -200px;
      left: 5%;
    }
    &__work {
      right: -1%;
      top: 0;
    }
  }
  .home__circle--smaller {
    width: 100px;
    height: 100px;
  }
}
</style>
