<template>
  <div>search
    {{list}}
  </div>
</template>

<script>
import axios from "axios"
export default {
data(){
  return{
    list:[]
  }
},
created(){
  axios.post("/list",{
    username:"111111"
  }).then(res=>{
    this.list=res.data.value
  })
}
}
</script>

<style>

</style>