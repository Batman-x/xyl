<template>
  <div class="head">
    <!-- 头部 -->
    <div class="head-top">
      <img style="width:80px;borderRadius:20px; height:80px;backgroundSize:200px" :src="shop.avatar" alt />
      <div class="head-top-text">
        <h1>
          <span>品牌</span>
          <b>{{shop.name}}</b>
        </h1>
        <p>{{shop.description}} / {{shop.deliveryTime}} 分钟送达</p>
        <p style="width:117px" v-if="shop.supports">
          <span>减</span>
          {{shop.supports[0]}}
        </p>
        <span @click="aaa" class="text" v-if="shop.supports">
          <span>{{shop.supports.length}} 个</span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <!-- 公告 -->
    <div class="head-footer">
      <p>
        <span class="s1">公告</span>
        <span>{{shop.bulletin}}</span>
      </p>
    </div>
    <!-- 蒙尘 -->

     <transition name="slide-fade">
    <Modalbox :shop="shop" @on="ison" v-show="isandyesno" />
    </transition>

  </div>
</template>

<script>
import Modalbox from "./Modalbox.vue";
export default {
  components: {
    Modalbox
  },
  props: ["shop"],
  data() {
    return {
      isandyesno: false
    };
  },
  methods: {
    aaa() {
      this.isandyesno = true;
    },
    ison() {
      this.isandyesno = false;
      console.log(this.isandyesno);
      console.log(11111);
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  flex: 0 0 120px;
  align-items: center;
  align-content: center;
  .head-top {
    height: 90px;
    background: url("../assets/imgs/timg.jpg") no-repeat;
    background-size: 100% 200px;
    padding: 20px;
    display: flex;
    .head-top-text {
      position: relative;
      padding-left: 20px;
      p{
        color: #fff;
        width: 100%;
        font-weight: 700;
        background: rgba(0, 0, 0, 0.8);
      }
      h1 {
        display: flex;
        width: 138px;
        background: rgba(0, 0, 0, 0.8);
        padding: -2px 0;
        color: #fff;
        font-size: 20px;
        vertical-align: middle;
        span {
          color: #fff;
          font-size: 14px;
          background: red;
          padding: 2px;
          border-radius: 3px;
          margin-right: 4px;
        }
      }
      .text {
        font-size: 14px;
        position: fixed;
        color: #fff;
        right: 25px;
        background: rgba(0, 0, 0, 0.5);
        padding: 4px 6px;
        border-radius: 20px;
        display: flex;
        align-items: center;
      }
      p {
        margin: 10px 0;
        span {
          border-radius: 30%;
          background: #fff;
          color: red;
          font-size: 12px;
          padding: 2px;
        }
      }
    }
  }
  .head-footer {
    height: 30px;
    background: #453e38;
    padding: 0 10px;

    p {
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #aaa;
      vertical-align: middle;
      .s1 {
        background: #fff;
        color: #aaa;
        border-radius: 20%;
        padding: 1px;
        font-size: 12px;
        font-weight: 700;
        margin-right: 6px;
      }
    }
  }
   .slide-fade-enter-active {
    transition: all 0.5s;
  }
  .slide-fade-leave-active {
    transition: all 0.8s;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }
}
</style>