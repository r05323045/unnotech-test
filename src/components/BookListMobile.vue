<template>
  <div class="card-container">
    <div class="card-wrapper">
      <div class="card-slide" v-for="i in 5" :key="i"  :class="{ selected: $route.path === `/books/${i}`}">
        <div class="inner-wrapper">
          <div class="background">
            <div class="image" style="background: url(https://cf-assets2.tenlong.com.tw/products/images/000/157/348/medium/DM2110_3D-750x933-wide.jpg?1612439588) no-repeat center / cover"></div>
          </div>
        </div>
        <div class="book-name">駭客廝殺不講武德：CTF 強者攻防大戰直擊</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-container {
  max-width: 1280px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 220px;
  .card-wrapper {
    height: 100%;
    .card-slide {
      cursor: pointer;
      border-radius: 15px;
      display: inline-block;
      margin-bottom: 24px;
      text-align: center;
      font-size: 18px;
      min-width: 250px !important;
      margin: 24px 12px !important;
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
            @media (min-width: 768px) {
              filter: brightness(0.8);
            }
          }
        }
        &:hover {
          transform: scale(1.02);
          transition: ease-in-out 0.3s;
          .background {
            .image {
              filter: brightness(1);
            }
          }
        }
      }
      .book-name {
        margin: 16px;
        margin-top: 24px;
        text-align: left;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
      }
    }
    .card-slide.selected {
      box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.2);
      background: #000000;
      color: #ffffff;
    }
  }
}
</style>
