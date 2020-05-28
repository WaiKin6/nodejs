<template>
  <div>
      hot
      {{list}}
      <img v-lazy="imgUrl" alt="">
    <!-- <router-link to="/detail">
      点我进入详情
    </router-link> -->
    <button @click="Citem">
      点我进入详情
    </button>
    <aweSwiper/>
  </div>
</template>

<script>
import aweSwiper from "@/components/aweSwiper.vue"
import {mapState} from "vuex";
export default {
  components:{
    aweSwiper
  }
  ,data(){
    return{
      imgUrl:"http://pic39.nipic.com/20140329/5654593_113505353155_2.jpg"
    }
  },
 methods:{
  Citem(){
  this.$router.push({name:"detail",params:{
    id:1&&localStorage.setItem("num",1) 
  }})
  }
 },
 created(){
   this.$store.dispatch("getList")
 },
 computed:{
   ...mapState(["list"])
 }
}
</script>

<style>

</style>