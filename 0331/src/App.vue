<template>
  <div id="app">
    <router-view />
    <!-- <div>{{str | length10}}</div>
    <div>{{str1 | length10 | toUpperCase}}</div>-->
  </div>
</template>
<script>
export default {
    data() {
        return {
            str: "我是前端小白，欢迎大家来关注！",
            str1: "qianduanweidashu"
        };
    }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>
