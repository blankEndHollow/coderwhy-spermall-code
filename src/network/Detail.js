import {request} from "./request"
export function getDetail(iid)  {
    return request({
      url:'/detail',
      params:{
        iid
      }
    },5)
}

export function getRecommend(){
  return request({
      url:"/recommend" 
  },6)
}

export class Goods{
  constructor(itemInfo, columns, services,detailInfo){

      this.realPrice= itemInfo.lowNowPrice
      this.discount= itemInfo.discountDesc
      this.oldPrice= itemInfo.oldPrice
      this.newPrice= itemInfo.price
      this.title= itemInfo.title
      this.desc= detailInfo.desc
      this.services= services
      this.columns= columns  
       

  }
}

export class Shop{
  constructor(shopInfo){

      this.goodsCount= shopInfo.cGoods     
      this.logo= shopInfo.shopLogo
      this.sells= shopInfo.cSells     
      this.score= shopInfo.score
      this.fans= shopInfo.cFans
      this.name= shopInfo.name
      
      
  }
}

export class GoodsParams{
  constructor(info,rule){
    this.image= info.images ? info.images[0] : ''
    this.infos= info.set
    this.sizes=rule.tables
  }
}