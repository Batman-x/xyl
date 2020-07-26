<template>
  <div class="footer">
    <!-- 左边 -->
    <div class="footer-left" @click="cardbtn" style="color:#fff">
      <div class="cart-box">
        <van-icon :class=" {cart:true,active:newtatal>0}" name="shopping-cart" />
        <span v-if="newtatal >0" class="tatal">{{newtatal}}</span>
      </div>
      <span class="s1">￥{{newprice}}</span> 
      
      <span class="s2">{{ newprice > 0 ?'另需配送费4元' :'未选择商品' }}</span>
    </div>
    <!-- 右边 -->
    <div class="footer-right" @click="cardbtn">
      <van-button v-if="newprice<=0" type="default">￥20元起送</van-button>
      <van-button v-else-if="newprice<20" type="default" style="color:#fff;background:red">还差{{20-newprice}}元哦，哥哥</van-button>
      <van-button type="default" v-else style="color:#fff;background:green">去结算</van-button>
    </div>

    <!-- 蒙尘 -->
    <transition name="slide-fade">
      <div v-if="isandon" class="Modalbox3"></div>
    </transition>

    <transition name="bounce">
      <!-- 模态框 -->
      <div v-if="isandon" class="Modalbox2">
        <div class="Modalbox2-text">
          <span>已选购商品</span>
          <span @click="del">清空</span>
        </div>
        <!-- 添加的数据 -->
        <div class="count" v-for="v in newcount" :key="v.id">
          <div class="count-name">
            <span>{{v.name}}</span>
            <span class="jg">￥{{v.price * v.count}}</span>
          </div>
          <div class="btnjj">
            <button @click="num(v.name,-1)">-</button>
            <span>{{v.count}}</span>
            <button @click="num(v.name,1)">+</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isandon: false
    };
  },
  methods: {
    cardbtn() {
      if(this.newtatal >0){
        this.isandon = !this.isandon;
      }
    },

    num(name, num) {
      this.$store.commit("CHANGE", { name, num });
    },


    // 清空
    del(){
        this.$store.commit("del");     
        this.isandon = false
    }
  },
  mounted() {},
  created() {
    console.log(this.$store.getters.newcount);
  },
  computed: {
    // 数量大于0的
    newcount() {
      return this.$store.getters.newcount;
    },

    // 循环数量>0的
    newtatal() {
      let tatal = 0;
      this.newcount.forEach(v => (tatal += v.count));

      if(tatal === 0){
        this.isandon = false
      }
      return tatal;
    },


    newprice() {
      let newprice = 0;
      this.newcount.forEach(v => (newprice += v.count * v.price));
      return newprice;
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  background: #141c27;
  flex: 0 0 50px;
  display: flex;
  justify-content: space-between;
  .footer-left {
    display: flex;
    padding-left: 25px;
    flex: 1;
    justify-content: center;
    align-items: center;
    span {
      padding: 0 5px;
      color: #929297;
    }
    .s1 {
      font-size: 20px;
      font-weight: 700;
    }
    .s2 {
      font-size: 12px;
    }
    .cart-box {
      padding: 5px;
      background: #141c27;
      position: fixed;
      z-index: 99999;
      border-radius: 50%;
      left: 20px;
      bottom: 10px;
      .tatal {
        background: red;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        color: #fff;
        padding: 2px;
        position: fixed;
        text-align: center;
        vertical-align: middle;
        left: 55px;
      }
      .cart {
        background: #2b343d;
        font-size: 28px;
        border-radius: 50%;
        padding: 6px;
      }
      /deep/.active {
        background: rgb(40, 159, 228);
        color: #fff;
      }
    }
  }
  .footer-right {
    flex: 0 0 120px;
    button {
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: 0;
      color: #929297;
      background: #2b343d;
    }
  }

  .Modalbox2 {
    overflow-y: auto;
    width: 100%;
    height: 50%;
    position: fixed;
    bottom: 50px;
    z-index: 99;
    background: #fff;
    .Modalbox2-text {
      display: flex;
      justify-content: space-between;
      padding: 10px 10px;
      background: rgb(235, 236, 236);
    }

    .count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      border-bottom: 1px solid #ccc;
      .count-name {
        flex: 1;
        display: flex;
        padding-right: 50px;
        justify-content: space-between;
        .jg {
          color: red;
        }
      }
      .btnjj {
        flex: 0 0 70px;
        button {
          border: 0;
          background: cornflowerblue;
          border-radius: 50%;
          font-size: 20px;
          width: 20px;
          height: 20px;
          text-align: center;
          padding: 2px;
          vertical-align: middle;
        }
      }
    }
  }

  .Modalbox3 {
    width: 100%;
    height: 92.666%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 98;
    top: 0;
    left: 0;
  }
  .slide-fade-enter-active {
    transition: all 0.3s;
  }
  .slide-fade-leave-active {
    transition: all 0.8s;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in 0.3s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.3s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>