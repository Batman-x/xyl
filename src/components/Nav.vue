<template>
  <div class="nav">
    <van-tabs v-model="active" animated line-width="33.333333%">
      <van-tab v-for="(item,index) in  router" :title="item.name" :key="index" :to='item.router'>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
    data(){
        return{
            router:[
                {name:'菜单',router:'/menu'},
                {name:'评价',router:'/evaluate'},
                {name:'商家',router:'/information'},
            ],
            active:''
        }
    },
  
};
</script>

<style lang="less" scoped>
.nav {
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    text-decoration: none;
  }
  .active {
    border-bottom: 2px solid #000;
  }
  .van-tabs{
      width: 100%;
  }
}
</style>