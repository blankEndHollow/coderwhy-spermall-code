export default {
  addCart({state,commit},payload){
    
    return new Promise((resolve,reject)=>{
      //查找是否有相同
     let oldShinp=state.cartList.find(item=> item.iid === payload.iid )
     //根据查找结果决定添加
     if(oldShinp){
      commit('risen',oldShinp)
     }else{
      payload.count=1
      commit('addConter',payload)
     }
  
     resolve('已添加到购物车')
     
    })

   }
}