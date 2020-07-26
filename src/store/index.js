import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存入数据  多个组件可以共享state里面的数据
  state: {
    goods: [],
  },


  // 是修改仓库数据的唯一方式
  mutations: {
    // 增加数据
    ADD(state, data) {
      state.num += data
    },

	//减少数据
    RED(state, data) {
      state.num -= data
    },


    // 把商品数据传入到state中
    SET(state, data) {
      state.goods = data
    },


    // 改变商品的数量
    CHANGE(state, obj) {
      for(let item of state.goods){
        for(let v of item.foods){
          if(v.name ===obj.name){
            console.log(v.count);
              v.count += obj.num
          }
        }
      }
    },



      // 清空商品列表数据
      del(state){
        for(let item of state.goods){
          for(let v of item.foods){
            v.count = 0;
          }
        }
      }
  },



  // 仓库中的计算属性
  getters: {
    newnum(state) {
      return state.ages.filter(v => v > 18)
    },

    // 仓库中数量大于0的
    newcount(state){
      let arr = [];
      for(let item of state.goods){
        for(let v of item.foods){
          if(v.count >0){
            arr.push(v)
          }
        }
      }

      let newarr = [];
      let newobj = {};
      for(let item of arr){
        if(!newobj[item.name]){
          newobj[item.name] = 'abc'
          newarr.push(item)
        }
      }
      return newarr
    },

  


  },




  actions: {

  },
  modules: {
  }
})
