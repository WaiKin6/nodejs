<template>
<div class="login">
  <div class="login-form">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="account">
      <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
     <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
  </el-form>
  </div>
</div>

</template>
<script>
export default {
    data() {
        var checkAccount = (rule, value, callback) => {
            if (!value) {
                // console.log(value);
                return callback(new Error("账号不能为空"));   
            }
            setTimeout(() => {
                if (!(value.length >= 9 && value.length <= 11)) {
                    callback(new Error("账号不合法"));
                }
                callback()
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            }
            setTimeout(() => {
                if (!(value.length >= 9 && value.length <= 11)) {
                    callback(new Error("账号不合法"));
                }
                callback()
            }, 1000);
        };
        return {
            ruleForm: {
                pass: "",
                account: "",
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: "change" }//检验方式（blur为鼠标点击其他地方，）
                ],
                account: [
                    { validator: checkAccount, trigger: "change" }//检验方式（blur为鼠标点击其他地方，）
                ]
            }
        };
    },
    methods: {
        async submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                //validata 方法 valid 是一个布尔值 如果 通过校验返回 true 否则返回false
                if (!valid) {
                    return false;
                }
                return true
            }); 
            let accountFlag = this.ruleForm.account  && this.ruleForm.account.length >= 9 && this.ruleForm.account.length <= 11;
            let passFlag = this.ruleForm.pass  && this.ruleForm.pass.length >= 9 && this.ruleForm.pass.length <= 11;
            if(accountFlag && passFlag){
                // user_name:"w916peach", user_pwd:"Peach0126!"
                // eslint-disable-next-line camelcase
                let res = await this.$loginUser({user_name:this.ruleForm.account, user_pwd:this.ruleForm.pass});
                res.data.code === 1 && this.$router.push("/main") && this.$message({message:"登录成功", type :"success"});
                this.$store.dispatch("moduleA/getDate");
                this.$Cookie.set("token", res.data.token)
            }   
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  background: url("../assets/baLogin.jpg") no-repeat;
  .login-form{
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
  } 
}
</style>
<style lang="scss">

 .el-form-item__label {
    color: black;
  }
</style>
