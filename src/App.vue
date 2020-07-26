<template>
  <div class="app">
    <!-- 头部 -->
    <Head :shop="shop"></Head>

    <!-- 导航 -->
    <Nav></Nav>

    <!-- 内容 -->
    <div class="content">
      <router-view :shop="shop" />
    </div>

    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { goodslist, shopseller } from "./api/shop";
export default {
  components: {
    Head,
    Nav,
    Footer
  },
  data() {
    return {
      list: [],
      shop: {}
    };
  },
  async created() {
    let { goodsList } = await goodslist();
    for (let item of goodsList) {
      for (let v of item.foods) {
        v.count = 0;
      }
    }
    
    this.$store.commit('SET',goodsList)


    let { data } = await shopseller(); 
    this.shop = data;
    console.log(this.shop);
    
  }
};
</script>

<style lang="less" scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
