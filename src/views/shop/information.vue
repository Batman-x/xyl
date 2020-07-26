<template>
  <div class="information">
    <!-- 头部 -->
    <div class="top">
      <!-- 上 -->
      <div class="top-top">
        <div class="top-1">
          <p>{{shop.name}}</p>
          <p class="p1">
            <van-rate v-model="value" allow-half void-color="#ee0a24" size="15px" color="#ee0a24" />( 666 ) 月售1259875
          </p>
        </div>

        <div class="top-2">
          <van-icon name="like" color="#ee0a24" size="30px" />
          <span>已收藏</span>
        </div>
      </div>
      <!-- 下 -->
      <div class="bottom">
        <div>
          <h1>起送价</h1>
          <p>
            <span>20</span>元
          </p>
        </div>

        <div>
          <h1>商家配送</h1>
          <p>
            <span>4</span>元
          </p>
        </div>

        <div>
          <h1>平均配送时间</h1>
          <p>
            <span>39</span>分钟
          </p>
        </div>
      </div>
    </div>

    <!-- 分割 -->
    <div class="fg"></div>

    <!-- 公告 -->
    <div class="bulletin">
      <h1>公告与活动</h1>
      <p>{{shop.bulletin}}</p>
    </div>

    <!-- 活动 -->
    <div class="activity">
      <div class="d1" v-for="v in shop.supports" :key="v">
        <span>减</span>
        <i style="color:#000">{{v}}</i>
      </div>
    </div>

    <!-- 分割 -->
    <div class="fg"></div>

    <!-- 商家图片 -->
    <div>
      <h1>商家实景</h1>
      <img src alt />
    </div>

    <!-- 商家信息 -->
    <div class="footer">
      <h1>商家信息</h1>
      <p>该商家支持开发票，请在下单时填写好发票抬头</p>
      <p>品类：中餐</p>
      <p>地址：成都市天府新谷</p>
      <p>营业时间：08:00:00-18:00:00</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shop"],
  data() {
    return {
      value: 4.5
    };
  },

  created() {}
};
</script>

<style lang="less" scoped>
.information {
  // 头部
  .top {
    .top-top {
      display: flex;
      justify-content: space-evenly;
      padding: 20px 0;
      border-bottom: solid 1px #ccc;
      .top-1 {
        .p1 {
          font-size: 14px;
          color: #aaa;
          display: flex;
          align-items: center;
          margin: 10px 0;
        }
      }
      .top-2 {
        display: flex;
        flex-direction: column;
        text-align: center;
        color: #aaa;
        font-size: 14px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-evenly;
      padding: 20px 0;
      div {
        text-align: center;
        width: 33.3333%;
        h1 {
          color: #aaa;
          margin-bottom: 5px;
        }
        p {
          span {
            font-size: 30px;
            font-weight: lighter;
          }
        }
      }
    }
  }

  //   分割
  .fg {
    height: 20px;
    width: 100%;
    background-color: rgb(238, 241, 241);
  }
  .bulletin {
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    h1 {
      font-size: 20px;
      margin: 10px 0;
    }
    p {
      margin-left: 20px;
      color: red;
      line-height: 20px;
    }
  }
  .activity {
    div {
      color: #fff;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
    }
    .d1 {
      span {
        background: red;
        padding: 2px;
        border-radius: 2px;
        margin-left: 10px;
      }
    }
    .d2 {
      span {
        background: rgb(22, 164, 230);
        padding: 2px;
        border-radius: 2px;
        margin-left: 10px;
      }
    }
    .d3 {
      span {
        background: rgba(4, 134, 54, 0.986);
        padding: 2px;
        border-radius: 2px;
        margin-left: 10px;
      }
    }
  }

  // 最后
  .footer{
    height: 260px;
    h1{
      font-size:24px;
      padding-bottom: 10px;
    }
    p{
      background: rgb(228, 232, 233);
      padding: 10px 0;
      margin-bottom: 15px;
    }
  }
}
</style>