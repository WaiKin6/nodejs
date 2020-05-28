<template>
   <div class="home-wrap" ref="home" @scroll="scrollFn">
    <nav>
      <router-link
      v-for="(v,i) in navList"
      :key="i"
      :to="v.path"
      tag="span"
      active-class="active"
      >{{v.text}}</router-link>
    </nav>
    <div class="back" @click="back">回到顶部</div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
data(){
  return{
    navList:[
      {text:"cinema",path:"/home/cinema"},
      {text:"movie",path:"/home/movie"}
    ]
  }
},
methods:{
  back(){
      this.$refs.home.scrollTop = 0;
    }
  },
  scrollFn(){
    let homeTop=this.$refs.home.scrollTop;
    let offsetTop=this.$refs.nav.scrollTop;
        console.log(offsetTop,scrollTop);
        if(scrollTop-offsetTop>=0){
            this.fixed=true;
        }else{
            this.fixed=false;
        }
  }
}
</script>

<style lang="scss" scoped>

// nav{
//   width: 100%;
//   height: 30px;
//   line-height: 30px;
//   display: flex;
//   background: #ccc;
//   span{
//     flex: 1;
//     text-align: center;
//     &.active{
//       color: red;
//     }
//   }
// }
// .wrap-pop{
//   width: 100%;
//   height: 45px;
//   line-height: 45px;
//     position: fixed;
//     bottom: 20%;
//     left: 0;
//   }
//   nav{
//   width: 100%;
//   height: 45px;
//   line-height: 45px;
//   background: red;
//   }

// .box{
//   width: 100%;
//   height: 100%;
//   position: relative;
// }
.home-wrap {//√
    height: 100%;
    overflow: auto;
    // position: relative;
}
.back {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: hotpink;
    z-index: 666;
}
</style>