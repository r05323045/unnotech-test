<template>
  <div class="detail-card" v-if="Object.keys(book).length > 0">
    <div class="card-header">{{ books.filter((item) => { return item.id === book.id })[0].name }}</div>
    <div class="card-content">
      <validation-observer class="observer" v-slot="{ handleSubmit, invalid }">
        <form @submit.prevent="handleSubmit(submitData)">
          <div class="item-wrapper">
            <div class="container">
              <span class="title">價格</span>
              <div class="adjust-wrapper">
                <div class="icon-wrapper" :class="{ equalOne: book.data.price <= 1}">
                  <div class="icon minus" @click="book.data.price > 1 ? book.data.price-- : ''"></div>
                </div>
                <validation-provider class="provider" v-slot="{ errors, classes }" :rules="{ required: true, numeric: true, min: 1 }">
                  <input id="price" type="number" class="number" min="1" v-model="book.data.price" :class="classes">
                   <span v-if="errors[0]" class="invalid-text">{{ errors[0].replace('price ', '價格') }}</span>
                </validation-provider>
                <div class="icon-wrapper">
                  <div class="icon plus" @click="book.data.price++"></div>
                </div>
              </div>
            </div>
            <div class="container">
              <span class="title">數量</span>
              <div class="adjust-wrapper">
                <div class="icon-wrapper" :class="{ equalOne: book.data.count <= 1}">
                  <div class="icon minus" @click="book.data.count > 1 ? book.data.count-- : ''"></div>
                </div>
                <validation-provider class="provider"  v-slot="{ errors, classes }" :rules="{ required: true, numeric: true, min: 1 }">
                  <input id="count"  type="number" class="number" min="1" v-model="book.data.count" :class="classes">
                  <span v-if="errors[0]" class="invalid-text">{{ errors[0].replace('count ', '數量') }}</span>
                </validation-provider>
                <div class="icon-wrapper">
                  <div class="icon plus" @click="book.data.count++"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="button-wrapper">
            <button type="submit" class="button" :class="{ disabled: invalid }" :disabled="invalid">確認修改</button>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { Toast } from '@/utils/helpers'
import booksAPI from '@/apis/books'
import _ from 'loadsh'
export default {
  data () {
    return {
      book: {},
      bookId: 0
    }
  },
  props: {
    books: {
      type: Array
    }
  },
  created () {
    this.bookId = this.$route.params.id
    this.fetchBook()
  },
  watch: {
    $route () {
      this.bookId = this.$route.params.id
      this.fetchBook()
    }
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    },
    async fetchBook () {
      try {
        const { data } = await booksAPI.getBook(this.$route.params.id)
        this.book = data
      } catch (error) {
        this.book = {}
        Toast.fire({
          icon: 'error',
          title: '目前無法取得書籍資料'
        })
      }
    },
    submitData: _.debounce(function () {
      this.putBook()
    }, 1000),
    async putBook () {
      try {
        this.book.price = this.book.data.price
        this.book.count = this.book.data.count
        const { data } = await booksAPI.putBook(this.$route.params.id, this.book)
        if (!data.id) {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '已成功更新'
        })
      } catch (error) {
        this.book = {}
        Toast.fire({
          icon: 'error',
          title: '目前無法取得書籍資料'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$darkred: #c13515;
.detail-card {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  background: #ffffff;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  .card-header {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    background: #000000;
    color: #ffffff;
    padding: 12px 24px;
    font-weight: 700;
    text-align: left;
    overflow: hidden;
    line-height: 1.8;
    max-height: 22px;
    text-overflow: ellipsis;
    display: -webkit-box !important;
    -webkit-line-clamp: 1 !important;
    -webkit-box-orient: vertical !important;
  }
  .card-content {
    padding: 15px 30px;
    display: flex;
    flex-direction: column;
    @media (min-width: 375px) {
      flex-direction: row;
    }
    .observer {
      width: 100%;
      form {
        width: 100%;
        .item-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .container {
            margin: 24px 0;
            display: flex;
            flex-direction: row;
            .title {
              font-size: 1.2rem;
              font-weight: 700;
              margin-right: 24px;
              flex: 0.5;
              @media (min-width: 375px) {
                flex: none;
              }
            }
            .adjust-wrapper {
              flex: 1;
              display: flex;
              flex-direction: row;
              align-items: center;
              .provider {
                display: flex;
                flex-direction: column;
                position: relative;
                .number {
                  width: 80px;
                  text-align: center;
                  margin: 0 12px;
                  color: #222222;
                  font-weight: 500;
                  font-size: 18px;
                  border-radius: 4px;
                  border-width: 1px;
                  &:focus {
                    outline: none;
                  }
                }
                input.is-invalid {
                  border: 1px solid $darkred;
                }
                .invalid-text {
                  font-size: 12px;
                  line-height: 1.5;
                  color: $darkred;
                  position: absolute;
                  bottom: -22px;
                  left: 12px;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
                input[type=number] {
                  -moz-appearance: textfield;
                }
              }
              .icon-wrapper {
                width: 16px;
                height: 16px;
                border-radius: 100%;
                mask-size: cover;
                background: #000000;
                display: flex;
                align-items: center;
                justify-content: center;
                .icon {
                  cursor: pointer;
                  width: 12px;
                  height: 12px;
                  background: #ffffff;
                  mask-size: cover;
                }
                .icon.plus {
                  mask: url(../assets/plus.svg) no-repeat center;
                }
                .icon.minus {
                  mask: url(../assets/minus.svg) no-repeat center;
                }
              }
              .icon-wrapper.equalOne {
                background: #ffffff;
                .icon.minus {
                  cursor: default;
                }
              }
            }
          }
        }
        .button-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          @media (min-width: 375px) {
            justify-content: flex-end;
            align-items: flex-end;
          }
          .button {
            cursor: pointer;
            appearance: none;
            margin: 8px 24px;
            padding: 8px 16px;
            background: #000000;
            color: #ffffff;
            font-weight: 700;
            border-radius: 15px;
            &:focus {
              outline: none;
            }
          }
          .button.disabled {
            cursor: not-allowed;
            background: #666;
          }
        }

      }
    }
  }
}
</style>
