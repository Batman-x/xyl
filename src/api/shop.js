/* 
    封装用户ajax
*/
import req from '../utils/request';


// 获取商品
export function goodslist(params){
    return req.get('/goods/goods_list',params)
}



// 获取分类
export function shopseller(params){
    return req.get('/shop/seller',params)
}


// 获取评价
export function shopratings(params){
    return req.get('/shop/ratings',params)
}