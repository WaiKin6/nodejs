<template>
<div class="login">
  <div class="home">
  <el-input v-model="user" placeholder="请输入账号"></el-input>
  <el-input v-model="pwd" placeholder="请输入密码" show-password></el-input>
  <el-button type="warning" class="btn" @click="tomainpage">ToMainPage</el-button>
  </div>
</div>
</template>

<script>

export default {
    name: "Home",
    data(){
        return{
            user:"",
            pwd:""
        }
    },
    methods:{
        async tomainpage(){
            // user_name:"w916peach", user_pwd:"Peach0126!"
            // eslint-disable-next-line camelcase
            let res = await this.$loginUser({user_name:this.user, user_pwd:this.pwd});
            res.data.code === 1 ? this.$router.push("/main") : alert(res.data.msg);
            this.$store.dispatch("moduleA/getDate");
            this.$Cookie.set("token", res.data.token)
        }
    },
}

</script>
<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  background: url("../assets/bgLogin.jpg") no-repeat;
}
.home{
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  height: 200px;
  line-height: 70px;
  width: 400px;
  max-width: 400px;
  max-height: 400px;
  position: fixed;
  left: 65%;
  top: 30%;
  .btn{
    margin-top: 20px;
  }
}
</style>


