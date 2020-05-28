<template>
  <swiper>
    <swiper-slide>1</swiper-slide>
     <swiper-slide>2</swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'aweSwiper',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
.swiper-container{
  width: 100%;
  height: 200px;
  background: #cccccc;
}
</style>
