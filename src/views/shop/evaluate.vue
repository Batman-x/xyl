<template>
  <div class="shop-evaluate">
    <!-- 头部 -->
    <div class="shop-top">
      <!-- 左边 -->
      <div class="shop-left">
        <h1>4.9</h1>
        <p>综合评分</p>
        <p>高于周边商家98%</p>
      </div>

      <!-- 右边 -->
      <div class="shop-right">
        <p>
          服务态度
          <van-rate v-model="value" allow-half void-color="#ee0a24" color="#ee0a24" />
        </p>
        <p>
          送货速度
          <van-rate v-model="value" allow-half void-color="#ee0a24" color="#ee0a24" />
        </p>
        <p>送达时间 38分钟</p>
      </div>
    </div>

    <!-- 间隔 -->
    <div class="interval"></div>

    <!-- 内容 -->
    <div class="shop-content">
      <!-- 按钮组 -->
      <div class="shop-button">
        <van-button @click="type='all'" type="info">全部{{isall}}</van-button>
        <van-button @click="type='ok'" type="primary">满意{{isok}}</van-button>
        <van-button @click="type='on'" type="danger">不满意{{isno}}</van-button>

        <p>
          <van-icon name="success" />
          <span>只看有内容的评价</span>
        </p>
      </div>
      <!-- 评价 -->
      <div class="pj" v-for="(v,i) in rateTypedata" :key="i">
        <!-- 左边 -->
        <div class="pj-left">
          <img :src="v.avatar" alt />
        </div>

        <!-- 右边 -->
        <div class="pj-right">
          <p class="p1">
            <span>{{v.username}}</span>
            <span>2020-5-27</span>
          </p>

          <p class="p2">
            <van-rate  v-model="value" allow-half void-color="#ee0a24" color="#ee0a24" size="16px"/>
            <span v-if="v.deliveryTime && v.deliveryTime != ''">  {{v.deliveryTime}} 分钟送达</span>
          </p>

          <p>{{v.text}}</p>

          <p class="p4">
            <van-icon name="good-job" /> {{v.recommend[0]}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shopratings } from "../../api/shop";
export default {
  data() {
    return {
      value:4.5,
      data: [],
      type:'all'
    };
  },
  async created() {
    let { data } = await shopratings();
    this.data = data.map(v=>{
    return v
    })

    console.log(this.data);
    
  },
  computed:{
    num(){
      return this.$store.state.num
    },
    newages(){
      return this.$store.getters.newnum
    },

    // 计算满意程度
    // 全部
    isall(){
      return this.data.length;
    },
    isok(){
      return this.data.filter(v=>v.rateType === 0).length;
    },
    isno(){
      return this.data.filter(v=>v.rateType === 1).length;
    },


    rateTypedata(){
        if(this.type === 'all'){
          return this.data;
        }else if(this.type === 'ok'){
          return  this.data.filter(v=>v.rateType === 0)
        }else if(this.type === 'on'){
          return this.data.filter(v=>v.rateType === 1)
        }
    }
  }
};
</script>

<style lang="less" scoped>
.shop-evaluate {
  .shop-top {
    display: flex;
    justify-content: space-evenly;
    .shop-left {
      text-align: center;
      h1 {
        color: #ee0a24;
        font-size: 30px;
      }
      p:nth-child(2) {
        font-size: 14px;
        font-weight: 600;
        margin: 10px 0;
      }
      p:last-child {
        font-size: 12px;
        color: #aaa;
      }
    }
    .shop-right {
      p {
        display: flex;
        align-items: center;
        line-height: 26px;
        color: rgb(71, 68, 68);
        font-size: 14px;
        font-weight: 700;
        .van-rate {
          padding-left: 6px;
        }
      }
    }
  }

  //   间隔
  .interval {
    width: 100%;
    height: 15px;
    background: rgb(220, 225, 226);
    margin: 10px 0;
  }

  //   内容
  .shop-content {
    .shop-button {
      padding-left: 20px;
      border-bottom: 1px solid #ccc;
      button {
        border-radius: 0;
        margin-right: 15px;
        height: 35px;
      }
      p {
        display: flex;
        align-items: center;
        margin: 15px 0;
        i {
          font-size: 20px;
          color: #fff;
          background: #07c160;
          border-radius: 50%;
          padding: 2px;
        }
        span {
          margin-left: 10px;
          color: #aaa;
          font-weight: 500;
        }
      }
    }

    //  评价
    .pj {
      display: flex;
      border-bottom: 1px solid #ccc;
      padding: 20px;
      // justify-content: space-evenly;
      .pj-left {
        flex: 0 0 30px;
        height: 30px;
        border-radius: 50%;
        background: red;
        margin-right: 10px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }

      .pj-right {
        flex: 1;
        p{
            display: flex;
            align-items: center;
            margin-bottom: 9px;
        }
        .p1{
            display: flex;
            justify-content: space-between;
        }
        .p4{
            button{
                height: 22px;
                width: 80px;
                margin: 0 5px;
                padding: 0;
            }
        }
      }
    }
  }
}
</style>