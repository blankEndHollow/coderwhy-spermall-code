import {request} from './request'

export function getCategory(){
  return request({
    url:'/category'
  },2)
}

export function getSubCategory(mainKey){
  return request({
    url:'/subcategory',
    params:{
      mainKey
    }
  },2)
}