export default {
    collects(state){
        return state.cartList.length
    },
    collList(state){
        return state.cartList
    },
    getWallKey(state){
        return state.cateDetail
    }
}