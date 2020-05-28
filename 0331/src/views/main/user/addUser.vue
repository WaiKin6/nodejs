<template>
  <div class="addUser">
     <h2>添加用户</h2>
    <div class="cont">
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.addUser{
  width: 100%;
  height: 100%;
  h2{
    padding: 30px 24px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
  }
  .cont{
    box-sizing: border-box;
    margin:0 24px;
    display: flex;
    flex-wrap: wrap;
    .demo-ruleForm{
      width:  33.3%;;
      border: 1px solid #ccc;
    }
  }
}
</style>

