<template>
  <div class="home">
    <div class="top-wrapper">
      <div class="title">書籍清單</div>
      <div class="description">多久沒看書了？ 快來選購你要的書籍</div>
    </div>
    <div class="book-list-wrapper">
      <book-list-desktop v-if="windowWidth >= 768"/>
      <book-list-Mobile  v-if="windowWidth < 768"/>
    </div>
    <div class="book-detail-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import BookListDesktop from '@/components/BookListDesktop.vue'
import BookListMobile from '@/components/BookListMobile.vue'

export default {
  components: {
    BookListDesktop,
    BookListMobile
  },
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
  min-height: 980px;
  .top-wrapper {
    background: #000000;
    color: #ffffff;
    width: 100%;
    margin: auto;
    font-weight: 700;
    padding: 80px 0 40px;
    .title {
      height: 40px;
      font-size: 22px;
      line-height: 22px;
      @media (min-width: 992px) {
        font-size: 32px;
        line-height: 36px;
        margin-bottom: 12px;
      }
    }
    .description {
      height: 34px;
      line-height: 18px;
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
  .book-list-wrapper {
    padding: 40px 0;
    @media (min-width: 768px) {
      padding: 40px 80px 40px 80px;
    }
  }
  .book-detail-wrapper {
    z-index: 999;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
}
</style>
