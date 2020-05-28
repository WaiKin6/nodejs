<template>
<div>
  <div class="er">
    
     <router-link tag="span" active-class="active" to="/home/movie/hot">hot</router-link>
     <br>
     <router-link tag="span" active-class="active" to="/home/movie/future">future</router-link>
      
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.er{
  padding: 10px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: hotpink;
  display: flex;
  span{
    flex: 1;
    text-align: center;
    &.active{
      color: yellow;
    }
  }
}
</style>