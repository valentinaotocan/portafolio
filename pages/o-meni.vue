<template>
  <main>
    <section class="section section--first about-me ptb-custom plr-custom">
      <div class="about-me__circle linear"></div>
      <img
        src="~/assets/img/nofollow/skills.png"
        class="about-me__icon-skills png fromTop"
        v-in-viewport.once
        alt="Skills"
      />
      <img
        src="~/assets/img/nofollow/handshake.png"
        loading="lazy"
        class="about-me__icon-handshake png fromTop"
        v-in-viewport.once
        alt="Handshake"
      />
      <div class="about-me__text">
        <h1 class="fs-xl pb-sm">Kratko o meni</h1>
        <div class="about-me__text__virtues mw-550 fs-base">
          <ul class="ml-lg">
            <li>Društvena</li>
            <li>Komunikativna</li>
            <li>Pristupačna</li>
            <li>Odgovorna</li>
            <li>Organizirana</li>
          </ul>
          <ul class="ml-6xl">
            <li>Marljiva</li>
            <li>Kreativna</li>
            <li>Otvorena za učenje novih stvari</li>
            <li>Stalo mi je do međuljudskih odnosa</li>
            <li>Uvijek spremna na pomoć</li>
          </ul>
        </div>
      </div>
      <div class="about-me__img pl-5">
        <img
          src="~/assets/img/profile.jpeg"
          loading="lazy"
          class="about-me__img__profile img-contain border-img fromOpacity"
          v-in-viewport.once
          alt="Profile"
        />
      </div>
    </section>

    <section
      class="section frontend ptb-custom linear plr-custom txt-color-primary"
    >
      <img
        src="~/assets/img/nofollow/coding.png"
        loading="lazy"
        class="frontend__icon-coding png fromTop"
        v-in-viewport.once
        alt="Coding"
      />
      <img
        src="~/assets/img/nofollow/puzzle.png"
        loading="lazy"
        class="frontend__icon-puzzle png fromTop"
        v-in-viewport.once
        alt="Puzzle"
      />
      <h2 class="fs-xl pt-md pb-sm">Zašto baš frontend?</h2>
      <div class="frontend__text mw-550">
        <p class="pb-md fs-base">
          Frontend programiranje mi je poput slaganje puzli koje budi u meni dječju
          stranu. Daje mi razmišljati kako posložiti segmente web stranice.
        </p>
        <p class="pb-md fs-base">
          Svaki frontend projekt je drugačiji, što izgledom, što
          funkcionalnostima, stoga je svakog puta novi izazov i iskustvo. Nikad
          monoton.
        </p>
        <p class="fs-base">Idealan je za vizualne tipove poput mene.</p>
      </div>
    </section>

    <section class="section hobby ptb-custom plr-custom">
      <div class="hobby__circle-top linear"></div>
      <div class="hobby__circle-bottom linear"></div>
      <div class="mw-550">
        <h2 class="fs-xl pb-sm">Hobi</h2>
        <div class="pos-r">
          <h3 class="fs-lg">Čitanje knjiga</h3>
          <p class="pb-lg fs-base">
            Najviše volim čitati knjige o psihologiji jer me osvješćuju i otvaraju
            neki novi pogled na stvari.
          </p>
          <img
            src="~/assets/img/nofollow/book.png"
            loading="lazy"
            class="icon-book pos-a png fromTop"
            v-in-viewport.once
            alt="Book"
          />
        </div>
        <div class="pos-r">
          <h3 class="fs-lg">Priroda</h3>
          <p class="pb-lg fs-base">
            Od šetnje prirodom koja je dnevni odmor za dušu i tijelo do
            istraživanja sakrivenih mjesta.
          </p>
          <img
            src="~/assets/img/nofollow/sunset.png"
            loading="lazy"
            class="icon-nature pos-a png fromTop"
            v-in-viewport.once
            alt="Sunset"
          />
        </div>
        <div class="pos-r">
          <h3 class="fs-lg">Biljke</h3>
          <p class="pb-lg fs-base">
            Uzgoj sukulenata. Što su neobičniji to su zanimljiviji.
          </p>
          <img
            src="~/assets/img/nofollow/succulent.png"
            loading="lazy"
            class="icon-succulent pos-a png fromTop"
            v-in-viewport.once
            alt="Succulent"
          />
        </div>
        <h3 class="fs-lg">Fotografija</h3>
        <p class="pb-xl fs-base">Galerija mojih fotografija.</p>
      </div>

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img src="~/assets/img/turtle.jpeg" loading="lazy" alt="Turtle" />
        </swiper-slide>
        <swiper-slide>
          <img src="~/assets/img/daisy.JPG" loading="lazy" alt="Daisy" />
        </swiper-slide>
        <swiper-slide>
          <img src="~/assets/img/mountain.jpeg" loading="lazy" alt="Mountain" />
        </swiper-slide>
        <swiper-slide>
          <img src="~/assets/img/nature.jpeg" loading="lazy" alt="Nature" />
        </swiper-slide>
        <swiper-slide>
          <img src="~/assets/img/krka.JPG" loading="lazy" alt="NP Krka" />
        </swiper-slide>

        <swiper-slide>
          <img src="~/assets/img/sunset.jpeg" loading="lazy" alt="Sunset" />
        </swiper-slide>
        <swiper-slide>
          <img src="~/assets/img/marler.jpeg" loading="lazy" alt="Rt Marlera" />
        </swiper-slide>
        <swiper-slide>
          <img src="~/assets/img/storm.jpeg" loading="lazy" alt="Storm" />
        </swiper-slide>
        <swiper-slide>
          <img
            src="~/assets/img/fog-bled.JPG"
            loading="lazy"
            alt="Foggy Bled"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="~/assets/img/fog-venezia.JPG"
            loading="lazy"
            alt="Foggy Venezia"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  head() {
    return {
      title: 'Portfolio | O meni',
    }
  },
}
</script>

<style lang="scss">
.about-me {
  display: flex;

  &__circle {
    position: absolute;
    width: 340px;
    height: 170px;
    left: 12%;
    bottom: 0px;
    border-radius: 180px 180px 0 0;
  }
  &__icon-skills {
    display: none;
  }
  &__icon-handshake {
    display: none;
  }
  &__text {
    width: 50%;
    &__virtues {
      display: flex;
    }
  }
  &__img {
    width: 50%;
    // &__profile {
    //   max-width: 400px;
    // }
  }
}

.frontend {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__icon-puzzle {
    position: absolute;
    bottom: -44px;
    right: 11%;
    z-index: 1;
  }
}

.hobby {
  &__circle-top {
    width: 200px;
    height: 100px;
    border-radius: 0 0 110px 110px;
    position: absolute;
    top: 0;
    right: 8%;
  }
  &__circle-bottom {
    width: 100px;
    height: 100px;
    border-radius: 0 100% 0 0;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.swiper-button-prev {
  left: 5%;
  @media (max-width: 700px) {
    display: none;
  }
}

.swiper-button-next {
  right: 5%;
  @media (max-width: 700px) {
    display: none;
  }
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 24px;
  font-weight: 700;
  color: #0082c8;
}

// .swiper-pagination {
//   position: relative;
//   bottom: -20px;
//   z-index: 1 !important;
// }

.icon-book {
  top: 5px;
  right: -40%;
  @media (max-width: 1000px) {
    display: none;
  }
}
.icon-nature {
  top: 5px;
  right: -60%;
  @media (max-width: 1290px) {
    right: -40%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
}
.icon-succulent {
  top: 5px;
  right: -80%;
  @media (max-width: 1290px) {
    right: -40%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
}


@media (max-width: 1200px) {
  .about-me__text {
    padding-right: 5%;
  }
}

@media (max-width: 1000px) {
  .about-me {
    flex-direction: column;
    &__icon-handshake {
      display: block;
      position: absolute;
      bottom: 83px;
      left: 6%;
    }
    &__icon-skills {
      display: block;
      position: absolute;
      right: 17%;
      top: 200px;
    }
    &__text {
      width: 100%;
      padding-right: 0;
      padding-bottom: 70px;
    }
    &__img {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    &__circle {
      width: 200px;
      height: 100px;
      border-radius: 110px 110px 0 0;
    }
  }
}

@media (max-width: 800px) {
  .about-me__icon-skills {
    display: none;
  }
  .about-me__icon-handshake {
    display: none;
  }
}

@media (max-width: 500px) {
  .about-me__text__virtues {
    .ml-6xl {
      margin-left: 42px;
    }
  }
}
</style>
