<template>
  <div class="Modalbox2">
    <div class="top">
      <img :src="item.imgUrl" alt />
      <div class="top-all">
        <div class="top-text">
          <p class="top-text-name">{{item.name}}</p>
          <p class="top-text-rating">
            <span>月售：{{item.sellCount}}份</span>
            好评： {{item.rating}}
          </p>
        </div>

        <div class="top-text-price">
          <p>
            <span>￥{{item.price}}</span>
            <del>{{item.price + 4}}</del>
          </p>
          <van-button type="info">加入购物车</van-button>
        </div>
      </div>
    </div>

    <!-- 隔断 -->
    <div class="gd"></div>

    <!-- 商品介绍 -->
    <div class="goods-js">
      <h1>商品介绍</h1>
      <p>{{item.goodsDesc}}</p>
    </div>
   

    <!-- 隔断 -->
    <div class="gd"></div>

    <div class="goods-pj">
      <h1>商品评价</h1>

      <van-button type="info">全部</van-button>
      <van-button type="primary">推荐</van-button>
      <van-button type="warning">吐槽</van-button>
    </div>




    
        <!-- 取消蒙尘 -->
     <h1 class="mc" @click="hideDetail">x</h1>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    hideDetail() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="less" scoped>
.Modalbox2 {
    .mc{
        width: 100%;
        text-align: center;
    }
  overflow-y: auto;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999999999;
  background: #fff;
  .top {
    img {
      height: 300px;
    }
    .top-all {
      padding: 10px 20px;
      .top-text {
        p {
          line-height: 24px;
        }
        /deep/.top-text-name {
          font-weight: 700;
          font-size: 18px;
        }
        .top-text-rating {
          color: #aaa;
          color: 14px;
          span {
            padding-right: 10px;
          }
        }
      }
      .top-text-price {
        p {
          span {
            color: red;
            font-size: 20px;
            padding-right: 15px;
          }
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          border-radius: 50px;
          padding: 0px 15px;
          height: 35px;
        }
      }
    }
  }
  h1 {
    font-size: 50px;
  }

  //   隔断
  .gd {
    height: 24px;
    width: 100%;
    background: #ccc;
    margin: 20px 0;
  }

  //   商品介绍
  .goods-js {
    padding: 0 20px;
    h1 {
      font-size: 24px;
    }
    p {
      padding-left: 20px;
      line-height: 26px;
    }
  }

//   商品评价
.goods-pj{
    h1{
        font-size: 24px;
    }
}
}
</style>