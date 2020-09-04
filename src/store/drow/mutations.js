export default {
  risen(state,payload){
    payload.count++
  },
  addConter(state,payload){
    state.cartList.push(payload)
  } 
}