# unnotech-test

## 我們該如何執行你完成的專案

**1. 複製檔案至本機**
```
$ git clone https://github.com/r05323045/unnotech-test.git
```
**2. 安裝專案套件**
```
cd unnotech-test
npm install
```
**3. 編譯開發環境**
```
npm run serve
```

## 專案的架構、邏輯說明
```
App.vue
└── Home.vue
    ├── BookListDesktop.vue
    ├── BookListMobile.vue
    └── BookDetail.vue
```
1. 在一般尺寸螢幕(>= 768px)下使用 BookListDesktop 元件左到右排列元素，在小尺寸螢幕(< 768px)上則使用 BookListMobile 元件使元素超出畫面就自動往下排列
2. 在首頁使用 router-view ，使路由切換時 Book List 依然在相同位置
3. 使用 Watch 監聽路由，當路由改變時由 API 獲取該書本的最新資料
4. 當資料錯誤時，不顯示下方 BookDetail 元件
5. 當價格或數量小於等於 1 時不顯示左側減鈕

## 你對於所有使用到的第三方 library 的理解，以及為何使用它

1. 使用 [axios](https://github.com/axios/axios) 串接 API ，透過 axios.create 去創造一個實體去做get或是put，然後再 export 出去給其他元件import 使用
2. 使用 [Swiper](https://swiperjs.com/) 完成一般螢幕下左右滾動效果，Swiper 也可依畫面大小改變顯示數量，達成 RWD 效果
3. 使用 [sweetalert2](https://github.com/sweetalert2/sweetalert2) 提示使用者資料操作結果，如資料修改成功、書本資料獲取失敗...等
4. 使用 [VeeValidate](https://vee-validate.logaretm.com/v3) 進行表單驗證，當使用者清空 input 或輸入不合法的值時，無法按下確認修改按鈕
5. 使用 [lodash](https://www.npmjs.com/package/lodash.debounce) 實現 debounce 防止使用者頻繁點擊確認修改按鈕，從而造成伺服器負擔之狀況

## 在這份專案中你遇到的困難、問題，以及解決的方法


