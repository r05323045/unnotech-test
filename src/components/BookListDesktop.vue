<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" @click="$router.push(`/books/${book.id}`).catch(() => {})" v-for="book in books" :key="book.id" :class="{ selected: $route.path === `/books/${book.id}`}">
        <div class="inner-wrapper">
          <div class="background">
            <div class="image" :style="`background: url(${book.image}) no-repeat center / cover`"></div>
          </div>
        </div>
        <div class="book-name">{{ book.name }}</div>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'

export default {
  props: {
    books: {
      type: Array
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        992: {
          slidesPerView: 4.0,
          spaceBetween: '18%'
        },
        768: {
          slidesPerView: 3.0,
          spaceBetween: '15%'
        },
        576: {
          slidesPerView: 2.1,
          spaceBetween: '15%'
        },
        375: {
          slidesPerView: 1.5,
          spaceBetween: '15%',
          slidesPerGroup: 1
        }
      }
    })
  }
}
</script>

<style lang="scss">
.swiper-container {
  max-width: 1280px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .swiper-wrapper {
    height: 100%;
    .swiper-slide {
      cursor: pointer;
      border-radius: 15px;
      text-align: center;
      font-size: 18px;
      width: 50%;
      &:hover {
        transform: scale(1.02);
        transition: ease-in-out 0.3s;
      }
      .inner-wrapper {
        cursor: pointer;
        width: 100%;
        .background {
          padding-bottom: 100%;
          position: relative;
          .image {
            background: url(https://cf-assets2.tenlong.com.tw/products/images/000/157/348/medium/DM2110_3D-750x933-wide.jpg?1612439588) no-repeat center;
            background-size: cover;
            border-radius: 8px;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left:0;
          }
        }
      }
      .book-name {
        margin: 16px;
        text-align: left;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
      }
    }
    .swiper-slide.selected {
      box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.2);
      background: #000000;
      color: #ffffff;
      .inner-wrapper {
        .background {
          .image {
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
          }
        }
      }
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    @media (min-width: 768px) {
      display: block !important;
      position: absolute;
      right: 0rem;
      top: calc(50% - 1.5rem);
      background: #ffffff;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
      width: 3rem;
      height: 3rem;
      &:hover {
        transform: scale(1.05);
        transition: ease-in-out 0.3s;
      }
      &:focus {
        outline: none;
      }
      &::after {
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: #919191;
      }
    }
    @media (min-width: 992px) {
      display: none;
    }
  }
  .swiper-button-prev {
    left: 0;
  }
}
</style>
