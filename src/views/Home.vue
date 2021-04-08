<template>
  <div class="home">
    <div class="top-wrapper">
      <div class="title-wrapper"><span class="title" @click="$router.push('/books').catch(() => {})">書籍清單</span></div>
      <div class="description">多久沒看書了？ 點選書籍開始選購！</div>
    </div>
    <div class="book-list-wrapper">
      <book-list-desktop :books="books" v-if="windowWidth >= 768 && this.books.length > 0"/>
      <book-list-Mobile  :books="books" v-if="windowWidth < 768 && this.books.length > 0"/>
    </div>
    <div class="book-detail-wrapper">
      <router-view :books="books"/>
    </div>
  </div>
</template>

<script>
import BookListDesktop from '@/components/BookListDesktop.vue'
import BookListMobile from '@/components/BookListMobile.vue'
import booksAPI from '@/apis/books'
export default {
  components: {
    BookListDesktop,
    BookListMobile
  },
  data () {
    return {
      windowWidth: window.innerWidth,
      books: []
    }
  },
  created () {
    this.fetchBooks()
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
    },
    async fetchBooks () {
      try {
        const { data } = await booksAPI.getBooks()
        this.books = data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
  min-height: 900px;
  .top-wrapper {
    background: #000000;
    color: #ffffff;
    width: 100%;
    margin: auto;
    font-weight: 700;
    padding: 80px 0 40px;
    .title-wrapper {
      height: 40px;
      font-size: 22px;
      line-height: 22px;
      @media (min-width: 992px) {
        font-size: 32px;
        line-height: 36px;
        margin-bottom: 12px;
      }
      .title {
        cursor: pointer;
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
