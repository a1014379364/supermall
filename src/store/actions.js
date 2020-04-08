export default {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if(oldProduct){
        // oldProduct.count += 1
        context.commit('addCounter',oldProduct)
        resolve("购物车中商品数量加一")
      }else{
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve("商品已新增至购物车")
      }
    })
  }
}