// core version + navigation, pagination modules:
//import Swiper from 'swiper';

import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss/pagination';
import 'swiper/css/navigation';
import 'swiper/scss'

const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

import './room-card.scss'; 
import '../rating/rating.scss'