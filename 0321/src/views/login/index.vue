<template>
  <div>
    <button @click="setItem">home</button>
    <router-link to="/search">ss</router-link>
    </div>
</template>

<script>
export default {
methods:{
  setItem(){
    let token=localStorage.setItem("token","jian");
    let topath=this.$route.query.topath;
    this.$router.push(topath)

  }
}
}
</script>

<style>

</style>