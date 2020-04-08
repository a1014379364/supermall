import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  //mutation唯一的目的是修改state中状态
  //mutation中每个方法尽可能完成的事件比较单一
  //所以有判断逻辑的方法，最好放到action里面
  // addCart(state,payload){
  //   // let oldProduct = null
  //   // for(let item of state.cartList){
  //   //   if(item.iid === payload.iid){
  //   //     oldProduct = item
  //   //   }
  //   // }
  //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)
  //
  //   if(oldProduct){
  //     oldProduct.count += 1
  //   }else{
  //     payload.count = 1
  //     state.cartList.push(payload)
  //   }
  //
  // },
  [ADD_COUNTER](state,payload){
    payload.count ++
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}