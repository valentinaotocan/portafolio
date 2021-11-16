import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper, {
  Navigation,
  Controller,
  Pagination,
  Autoplay,
  EffectFade
} from 'swiper'
import 'swiper/swiper-bundle.css'


Swiper.use([Navigation, Controller, Pagination, Autoplay, EffectFade])

Vue.use(VueAwesomeSwiper)