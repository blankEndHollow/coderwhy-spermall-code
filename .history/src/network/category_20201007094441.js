import {request} from './request'

export function getCategory(){
  return request({
    url:'/category'
  },2)
}

export function getSubCategory(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  },2)
}

export function getSubCategoryDetail(miniWallkey, type){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  },2)
}