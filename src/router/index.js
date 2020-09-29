import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:()=>import("views/home/home")
    },
    {
      path:"/category",
      component:()=>import("views/category/category")
    },
    {
      path:"/cart",
      component:()=>import("views/cart/cart")
    },
    {
      path:"/profile",
      component:()=>import("views/profile/profile")
    },
    {
      path:"/detail/:id",
      component:()=>import("views/detail/Detail")
    }
  ],
  // mode:"history"
})