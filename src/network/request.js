import axios from "axios"

export function request(config,s){
    s=s ?? 0;
    const options={
        baseURL:"xxxxxxxx",
        timeout:6000
    }
   
    if(s!=0){
      options.baseURL="xxxxxxxx"
    }
    const instance=axios.create(options)
    instance.interceptors.request.use(config=>{
     
      return config
    },err=>{
      console.log(err)
    })

    instance.interceptors.response.use(config=>{

      return config.data
    },err=>{
      console.log(err,'response')
    })

    return instance(config)
}