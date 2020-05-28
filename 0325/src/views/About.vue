<template>
  <div>
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  methods:{
   async test(){
      let res=await this.$http("get","/api/home");
      await console.log(res);
    }
  }
}
</script>

<style>

</style>
