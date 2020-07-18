import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 方法1：
      // let oldProduct = null;
      // for (let item of cartList){
      //   if (item.iid === payload.iid){
      //     oldProduct = item
      //   }
      // }
      // if(oldProduct) {
      //   oldProduct.count += 1
      // }else {
      //   payload.count = 1;
      //   state.cartList.push(payload)
      // }

      // 方法2：
      // 1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 2.判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的商品数量+1')
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
  }
}