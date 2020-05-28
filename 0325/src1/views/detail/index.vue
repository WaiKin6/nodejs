<template>
  <div>
    detail
    
    {{num}}
  </div>
</template>

<script>
export default {
data(){
  return {
    num:localStorage.getItem("num")||this.$route.params.id
  }
},
}
</script>

<style>

</style>