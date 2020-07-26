<template>
  <div class="menu">
    <!-- 左边 -->
    <div class="menu-left">
      <div class="son">
        <p
          @click="btn(v.name)"
          :class="active === v.name ? 'active' : '' "
          v-for="v in list"
          :key="v.name"
        >{{v.name}}</p>
      </div>
    </div>

    <!-- 右边 -->
    <div class="menu-right">
      <!-- 商品 -->
      <div>
        <div :id="item.name" class="menu-goods" v-for="item in list" :key="item.name">
          <h1 class="name">{{item.name}}</h1>
          <ul @click="mtkbtn(v)" class="menu-goods-left" v-for="v in item.foods" :key="v.id">
            <li>
              <img style="width:80px;height:80px" :src="v.imgUrl" alt />
              <div class="content">
                <!-- 菜名 -->
                <h1>{{v.name}}</h1>
                <!-- 评论 -->
                <p class="pl">评论：{{v.goodsDesc}}</p>
                <!-- 销量 -->
                <p>好评：{{v.rating}}% 销量：{{v.sellCount}}</p>
                <!-- 价格 -->
                <p><span>￥{{v.price}}</span></p>
                <!-- 加减 -->
                <div class="btnjj">
                  <button v-if="v.count >0" @click.stop="addgoods(v.name,-1)">-</button>
                  <span v-if="v.count >0">{{v.count}}</span>
                  <button @click.stop="addgoods(v.name,1)">+</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
		
	<div>x改的11111</div>
    <!--模太框 -->
    <Modalbox2 :item="item" @close='hideDetail' v-if="isandon" />
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Modalbox2 from './Modalbox2'
export default {
  components:{
    Modalbox2
  },
  data() {
    return {
      count:0,
      value:0,
      item:{},
      isandon:false,
      active: "",
      arrlenght: [] //存放每个分类的最小高度和最大高度
    };
  },
  computed:{
    num(){
      return this.$store.state.num
    },
    list(){
      return this.$store.state.goods
    }
  },
  mounted() {
    let scroll = new BScroll(".menu-left", {
      click: true
    });
    this.scroll2 = new BScroll(".menu-right", {
      probeType: 3,
      click:true
    });

    // 监听滚动动事件
    this.scroll2.on("scroll", pos => {
      // console.log("滚动了",pos);
      let y = Math.abs(pos.y);

      // console.log(this.arrlenght);
      for (let i = 0; i < this.arrlenght.length; i++) {
        // console.log(this.arrlenght[i]);
        if (y >= this.arrlenght[i].min && y < this.arrlenght[i].max) {
          this.active = this.arrlenght[i].name;
        }
      }
    });
  },
  updated() {
    let total = 0;
    for (let item of this.list) {
      // 每个分类的高度
      let card = document.getElementById(item.name).offsetHeight;
      // 计算每个分类的区间
      this.arrlenght.push({ min: total, max: total + card, name: item.name });
      total = total + card;
    }
  },
  methods: {
    jjj(){
      this.$store.commit("ADD",5)
    },
    btn(name) {
      this.active = name;
      this.scroll2.scrollToElement(document.getElementById(name), 300);
    },

    mtkbtn(item){
      this.isandon = true
      // console.log(item);
      this.item = item
    },
    hideDetail(){
    this.isandon = false
  },
    // 增加和减少
  addgoods(name,num){
      this.$store.commit("CHANGE",{name,num})
      
  }

  },
  
};
</script>

<style lang="less" scoped>
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  // 左边
  .menu-left {
    flex: 0 0 80px;
    background: #f4f5f7;
    height: 100%;
    // overflow-y: auto;
    overflow: hidden;
    p {
      line-height: 30px;
      font-size: 14px;
      padding: 20px 5px 20px 10px;
      border-bottom: 2px solid #fff;
    }
    .active {
      background: #fff;
      color: #aaa;
    }
  }
  // 右边
  .menu-right {
    flex: 1;
    height: 100%;
    // overflow-y: auto;
    overflow: hidden;
    padding-left: 5px;
    .menu-goods {
      .name {
        background: rgb(236, 241, 243);
        padding: 6px 0;
        border-left: 2px solid rgb(199, 206, 206);
        padding-left: 9px;
        color: rgb(120, 126, 128);
      }
      // margin: 10px 0 0 0;
      .menu-goods-left {
        background: #f4f5f7;
        padding: 10px;
        margin-top: 20px;
        li {
          padding-left: 10px;
          display: flex;
          img {
            margin-right: 10px;
          }
        }
        .content {
          position: relative;
          .btnjj{
            position: absolute;
            right: 4px;
            bottom: 3px;
            button{
              border: 0;
              background: cornflowerblue;
              border-radius: 50%;
            }
          }
          h1 {
            font-size: 18px;
          }
          .pl {
            width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            font-size: 13px;
            color: rgb(61, 63, 63);
            line-height: 24px;
            span {
              color: red;
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}
</style>