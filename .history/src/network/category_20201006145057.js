import { from } from "core-js/fn/array";
import {request} from './request'

export function getCategory(){
  return request({
    url:'/category'
  })
}