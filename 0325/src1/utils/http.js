import axios from 'axios'

export default function http(method,url,time){
  method==="put"?this.$router.push("/login"):method;
  
  let configData         = {};
      configData.method  = method;
      configData.url     = url;
      configData.time    = time;

  return axios(configData).catch(err=>{
      let newTime = new Date().getTime()/1000; 
      if(newTime-configData.time>5){
        alert("请求超时");
        return
      }
      for(let i = 300;i<=307;i++){
        if(err.response.status === i) return alert(`${i}错误`)
      }
      for(let i = 400;i<=417;i++){
        if(err.response.status === i) return alert(`${i}错误`)
      }
      for(let i = 500;i<=505;i++){
        if(err.response.status === i) return alert(`${i}错误`)
      }
  })
}