<template>
  <main>
    <section class="section section--first knowledge ptb-custom plr-custom">
      <img
        src="~/assets/img/nofollow/html.png"
        class="knowledge__icon-html img-contain png fromTop"
        v-in-viewport.once
        alt="Html"
      />
      <div class="knowledge__circle linear"></div>
      <div class="knowledge__text">
        <h2 class="fs-xl pb-sm">Znanje</h2>
        <div class="knowledge__text__items mw-550 fs-base">
          <ul class="ml-lg">
            <li>Git</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
          </ul>
          <ul class="ml-6xl">
            <li>BEM (Block, Element, Modifier) metoda</li>
            <li>JavaScript</li>
            <li>Osnove Nuxt.js-a</li>
          </ul>
        </div>
      </div>
      <div class="knowledge__image pl-5">
        <img
          src="~/assets/img/programming.JPG"
          class="img-contain w-rsp fromOpacity"
          v-in-viewport.once
          alt="Programming"
        />
      </div>
    </section>

    <section
      class="section learning ptb-custom plr-custom linear txt-color-primary"
    >
      <img
        src="~/assets/img/nofollow/brain-process.png"
        loading="lazy"
        class="learning__icon-process img-contain png fromTop"
        v-in-viewport.once
        alt="Learning process"
      />
      <img
        src="~/assets/img/nofollow/brain.png"
        loading="lazy"
        class="learning__icon-brain img-contain png fromTop"
        v-in-viewport.once
        alt="Brain"
      />
      <h2 class="fs-xl pb-sm pt-md">Učenje</h2>
      <div class="learning__text fs-base">
        <p class="pb-sm">Trenutno pohađam tečajeve na Udemy-u:</p>
        <p class="pb-sm">
          Modern JavaScript from the beginning - Brad Traversy
        </p>
        <p>
          50 projects in 50 days - HTML, CSS and JavaScript - Brad Traversy,
          Florin Pop
        </p>
      </div>
    </section>

    <section class="section experience ptb-custom plr-custom">
      <div class="experience__top-circle linear"></div>
      <div class="experience__bottom-circle linear"></div>
      <div class="experience__wrap">
        <div class="experience__wrap__text mw-550">
          <h1 class="fs-xl pb-sm">Iskustvo</h1>
          <p class="fs-base pb-md">
            Kao frontend developer imam 6 mj. radnog iskustva. Za to vrijeme
            radila sam na sveukupno 10 projekata u koje spada i održavanje web
            stranica.
          </p>
          <p class="fs-base">
            To su: A1 (Vještine budućnosti - timski rad), Archmedia (coming soon
            page), Benvenuti, Camp Dvor (održavanje), Chiavalon (zadnja faza),
            ICT-Istra (početak developmenta), Kabola (timski rad, održavanje),
            Kutjevo (održavanje), Plus Hosting (timski rad) i Stanzia Vinella
            (održavanje).
          </p>
          <div class="icon-flex">
            <img
              src="~/assets/img/nofollow/next-level.png"
              loading="lazy"
              class="img-contain png fromTop"
              v-in-viewport.once
              alt="Next level"
            />
          </div>
        </div>
        <div class="experience__wrap__image pl-5">
          <img
            src="~/assets/img/screen.jpg"
            loading="lazy"
            class="img-contain blur w-rsp"
            alt="Screen"
          />
        </div>
      </div>

      <div class="button">
        <a
          href="/files/valentina_otocan_cv.pdf"
          download=""
          class="fs-base btn mt-3xl">
          Preuzmi CV</a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Portfolio | Iskustvo',
    }
  },
}
</script>

<style lang="scss" scoped>
.knowledge {
  display: flex;
  &__icon-html {
    position: absolute;
    z-index: 1;
    bottom: 22px;
    left: 17%;
  }
  &__circle {
    position: absolute;
    width: 280px;
    height: 140px;
    left: 12%;
    bottom: 0px;
    border-radius: 150px 150px 0 0;
  }

  &__text {
    width: 50%;
    &__items {
      display: flex;
    }
  }
  &__image {
    width: 50%;
  }
}

.learning {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__icon-brain {
    position: absolute;
    bottom: 0px;
    right: 17%;
  }
  &__text {
    max-width: 552px;
  }
}

.experience {
  &__top-circle {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    border-radius: 0 0 0 100%;
  }
  &__bottom-circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 150px;
    height: 150px;
    &__bottom-circle {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 150px;
      height: 150px;
      border-radius: 0 100% 0 0;
    }
    border-radius: 0 100% 0 0;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    position: relative;
    &__text {
      width: 50%;
    }
    &__image {
      width: 50%;
    }
  }
}

.button {
  display: flex;
  justify-content: center;
}

.blur {
  filter: blur(3px);
  -webkit-filter: blur(3px);
}

.icon-flex {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

@media (max-width: 1360px) {
  .experience__wrap__text,
  .knowledge__text {
    padding-right: 5%;
  }
}

@media (max-width: 1000px) {
  .knowledge {
    flex-direction: column;
    &__icon-html {
      bottom: -5px;
    }
    &__text {
      width: 100%;
      padding-bottom: 70px;
    }
    &__image {
      width: 100%;
    }
    &__circle {
      width: 200px;
      height: 100px;
      border-radius: 110px 110px 0 0;
    }
  }

  .experience__wrap__text,
  .knowledge__text {
    padding-right: 0;
  }

  .w-rsp {
    width: 1000px;
  }

  .experience__wrap {
    flex-direction: column;
    &__text {
      width: 100%;
      padding-bottom: 70px;
    }
    &__image {
      width: 100%;
    }
  }
  .icon-flex {
    padding-top: 16px;
  }
}

@media (max-width: 500px) {
  .knowledge__text__items {
    .ml-6xl {
      margin-left: 42px;
    }
  }
}
</style>
