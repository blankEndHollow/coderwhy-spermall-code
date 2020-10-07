import {request} from './request'

export function getCategory(){
  return request({
    url:'/category'
  },2)
}

export function getSub