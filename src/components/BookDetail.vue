<template>
  <div class="detail-card">
    <div class="card-header">選擇價格與數量</div>
    <div class="card-content">
      <div class="item-wrapper">
        <div class="container">
          <span class="title">價格</span>
          <div class="adjust-wrapper">
            <div class="icon-wrapper">
              <div class="icon minus"></div>
            </div>
            <input class="number"/>
            <div class="icon-wrapper">
              <div class="icon plus"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <span class="title">數量</span>
          <div class="adjust-wrapper">
            <div class="icon-wrapper">
              <div class="icon minus"></div>
            </div>
            <input class="number"/>
            <div class="icon-wrapper">
              <div class="icon plus"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">確認修改</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  }
  .card-content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    @media (min-width: 375px) {
      flex-direction: row;
    }
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
          .number {
            width: 40px;
            margin-right: 12px;
            color: #222222;
            font-weight: 700;
            border-radius: 4px;
            border-width: 1px;
            &:focus {
              outline: none;
            }
          }
          .icon-wrapper {
            width: 16px;
            height: 16px;
            border-radius: 100%;
            margin-right: 12px;
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
        margin: 24px;
        padding: 8px 16px;
        background: #000000;
        color: #ffffff;
        font-weight: 700;
        border-radius: 15px;
      }
    }
  }
}
</style>
