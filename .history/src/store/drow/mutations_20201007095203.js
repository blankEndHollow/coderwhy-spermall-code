export default {
  risen(state,payload){
    payload.count++
  },
  addConter(state,payload){
    payload.checked=false
    state.cartList.push(payload)
  },
  updateCate(state,payload){
    state.cateDetail=payload
  }
}