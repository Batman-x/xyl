<template>
  <div class="Modalbox">
    <div class="content">
      <div class="content-top">
        <h1>{{shop.name}}</h1>
        <van-rate v-model="value" :count="6" />
      </div>


        <!-- 优惠活动 -->
      <div class="content-nav">
        <div class="title">优惠活动</div>
      </div>

      <div class="content-supports">
        <p v-for="v in shop.supports" :key="v">{{v}}</p>
      </div>
      

        <!-- 商家公告 -->
      <div class="content-nav">
        <div class="title">商家公告</div>
      </div>

      <div class="content-supports">
          <p style="padding:0 30px">{{shop.bulletin}}</p>
      </div>
    </div>

    <div class="footer">
      <van-icon @click="modal" class="x" name="cross" size="30px" />
    </div>
    <!-- <h1 @click="modal" class="x" name="cross" >x</h1> -->
  </div>
</template>

<script>
export default {
  props: ["shop"],
  data() {
    return {
      value: 6
    };
  },
  methods: {
    modal() {
      this.$emit("on");
    }
  }
};
</script>

<style lang="less" scoped>
//  莫太框
.Modalbox {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999999999;
  display: flex;
  justify-content: center;
  .content {
    padding-top: 30px;
    .content-top {
      text-align: center;
      h1 {
        padding: 15px 0;
        font-size: 20px;
        color: #fff;
      }
    }
    .content-nav {
      padding: 5px 0;
      .title {
        color: #fff;
        font-size: 24px;
        text-align: center;
        position: relative;
        height: 50px;
        line-height: 50px;
        width:335px;
        margin:10px auto;
      }
      .title:after,
      .title:before {
        content: "";
        position: absolute;
        top: 50%;
        background: #7a7a7a;
        height: 1px;
        width: 30%;
      }
      .title:after {
        left: 0;
      }
      .title:before {
        right: 0;
      }
    }
    .content-supports{
      padding: 5px 0;
      p{
        color: #fff;
        line-height: 30px;
        font-size: 14px;
        padding-left: 80px;
      }
    }
  }
  .footer {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    .x {
      margin-bottom: 20px;
      font-size: 40px;
      color: #fff;
    }
  }
}
</style>