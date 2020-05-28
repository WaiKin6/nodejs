<template>
  <div class="addUser">
    <h2>添加用户</h2>
    <div class="cont-out">
      <div class="cont-in">
        <div class="form">
         <div class="top-btn">
            <el-button size="small" :class="{'cls':btnVal==='添加用户'}" @click="changeFn('添加用户')">添加用户</el-button>
            <el-button size="small" :class="{'cls':btnVal==='更新用户'}" @click="changeFn('更新用户')">更新用户</el-button>
         </div>
          <el-select v-show="btnVal==='更新用户'" v-model="formInline.region" placeholder="请选择身份id">
            <el-option v-for="(v, i) in userList" :label="v.user_name" :key="i" :value="v.user_name"></el-option>
          </el-select>
          <el-input v-model="formInline.name" placeholder="请输入用户名"></el-input>
          <el-input v-model="formInline.pwd" placeholder="请输入密码"></el-input>
          <el-select v-model="formInline.userId" placeholder="请选择身份">
            <el-option v-for="(v, i) in optionsArr1" :key="i" :label="v.identity_text" :value="v.identity_id"></el-option>
          </el-select>
          <div class="bottom-btn">
             <el-button type="primary" size="small"  @click="btnSbumit">主要按钮</el-button>
             <el-button size="small" @click="bottomReset">重置</el-button>
          </div>
        </div>
      </div>
      <div class="cont-in">
        <div class="form">
         <div class="top-btn">
            <el-button class="cls" size="small" @click="changeFn('添加身份')">添加身份</el-button>
         </div>
          <el-input v-model="formInline.name_1" placeholder="请输入身份名称"></el-input>
          <div class="bottom-btn">
             <el-button type="primary" size="small"  @click="bottomSbumit('添加身份')">主要按钮</el-button>
             <el-button size="small" @click="bottomReset">重置</el-button>
          </div>
        </div>
      </div>
         <div class="cont-in">
        <div class="form">
         <div class="top-btn">
            <el-button size="small"  class="cls" @click="changeFn('添加api接口权限')">添加api接口权限</el-button>
         </div>
          <el-input v-model="formInline.name0" placeholder="请输入api接口权限名称"></el-input>
          <el-input v-model="formInline.name1" placeholder="请输入api接口权限url"></el-input>
          <el-input v-model="formInline.name2" placeholder="请输入api接口权限方法"></el-input>
          <div class="bottom-btn">
             <el-button type="primary" size="small"  @click="bottomSbumit('添加api接口权限')">主要按钮</el-button>
             <el-button size="small" @click="bottomReset">重置</el-button>
          </div>
        </div>
      </div>
        <div class="cont-in">
        <div class="form">
         <div class="top-btn">
            <el-button size="small"  class="cls" @click="changeFn('添加视图接口权限')">添加视图接口权限</el-button>
         </div>
           <el-select v-model="formInline.userId_1" placeholder="请选择已有视图">
            <el-option label="管理员" value="管理员"></el-option>
             <el-option label="出题者" value="出题者"></el-option>
             <el-option label="浏览者" value="浏览者"></el-option> 
          </el-select>
          <div class="bottom-btn">
             <el-button type="primary" size="small"  @click="bottomSbumit('添加视图接口权限')">主要按钮</el-button>
             <el-button size="small" @click="bottomReset">重置</el-button>
          </div>
        </div>
      </div>
        <div class="cont-in">
        <div class="form">
         <div class="top-btn">
            <el-button size="small"  class="cls" @click="changeFn('给身份设置api接口权限')">给身份设置api接口权限</el-button>
         </div>
           <el-select v-model="formInline.userId0" placeholder="请选择身份id">
            <el-option label="管理员" value="管理员"></el-option>
             <el-option label="出题者" value="出题者"></el-option>
             <el-option label="浏览者" value="浏览者"></el-option> 
          </el-select>
           <el-select v-model="formInline.userId1" placeholder="请选择身份api接口权限">
            <el-option label="管理员" value="管理员"></el-option>
             <el-option label="出题者" value="出题者"></el-option>
             <el-option label="浏览者" value="浏览者"></el-option> 
          </el-select>
          <div class="bottom-btn">
             <el-button type="primary" size="small"  @click="bottomSbumit('给身份设置api接口权限')">主要按钮</el-button>
             <el-button size="small" @click="bottomReset">重置</el-button>
          </div>
        </div>
      </div>
          <div class="cont-in">
        <div class="form">
         <div class="top-btn">
            <el-button size="small"  class="cls" @click="changeFn('给身份设置视图权限')">给身份设置视图权限</el-button>
         </div>
           <el-select v-model="formInline.userId2" placeholder="请选择身份id">
            <el-option label="管理员" value="管理员"></el-option>
             <el-option label="出题者" value="出题者"></el-option>
             <el-option label="浏览者" value="浏览者"></el-option> 
          </el-select>
           <el-select v-model="formInline.userId3" placeholder="请选择身份视图权限id">
            <el-option label="管理员" value="管理员"></el-option>
             <el-option label="出题者" value="出题者"></el-option>
             <el-option label="浏览者" value="浏览者"></el-option> 
          </el-select>
          <div class="bottom-btn">
             <el-button type="primary" size="small" @click="bottomSbumit('给身份设置视图权限')">主要按钮</el-button>
             <el-button size="small" @click="bottomReset">重置</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            btnVal:"添加用户",
            optionsArr1:[],
            formInline:{
                name:"",
                // eslint-disable-next-line camelcase
                name_1:"",
                name0:"",
                name1:"",
                name2:"",
                pwd:"",
                userId:"",
                // eslint-disable-next-line camelcase
                userId_1:"",
                userId0:"",
                userId1:"",
                userId2:"",
                userId3:"",
            },
            userList:[]
        };
    },
    methods:{
        changeFn(val){
            this.btnVal = val;
            this.formInline.name = "";
            // eslint-disable-next-line camelcase
            this.formInline.name_1 = "";
            this.formInline.name0 = "";
            this.formInline.name1 = "";
            this.formInline.name2 = "";
            this.formInline.pwd = "";
        },
        bottomReset(){
            this.formInline.name = "";
            // eslint-disable-next-line camelcase
            this.formInline.name_1 = "";
            this.formInline.name0 = "";
            this.formInline.name1 = "";
            this.formInline.name2 = "";
            this.formInline.pwd = "";
            this.formInline.userId = "";
        },
        async btnSbumit(){
            if(this.btnVal === "添加用户"){
                // eslint-disable-next-line camelcase
                let res = await this.$addUser({user_name:this.formInline.name, user_pwd:this.formInline.pwd});
                res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"});
            }else if(this.btnVal === "更新用户"){
                // eslint-disable-next-line camelcase
                let res = await this.$putUser({user_name:this.formInline.name, user_pwd:this.formInline.pwd, user_id:this.userList.length + 1});
                res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"});
            }
        },
        async bottomSbumit(Val){
            
            if(Val === "添加身份"){
                // eslint-disable-next-line camelcase
                let res = await this.$addIdentity({params:{identity_text:this.formInline.name_1}});
                res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"})
            }else if(Val === "添加api接口权限"){
                // eslint-disable-next-line camelcase
                let res = await this.$addauthorityApi({params:{api_authority_text:this.formInline.name0, api_authority_url:this.formInline.name1, api_authority_method:this.formInline.name2}});
                res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"})
            }else if(Val === "添加视图接口权限"){
                // eslint-disable-next-line camelcase
                let res = await this.$authorityView({params:{view_authority_text:this.formInline.userId_1, view_id:this.userList.length + 1}});
                res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"})
            }else if(Val === "给身份设置api接口权限"){
                // eslint-disable-next-line camelcase
                let res = await this.$setIdentityApi({params:{identity_id:this.userList.length + 1, api_authority_id:this.userList.length + 1}});
                res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"})
            }else if(Val === "给身份设置视图权限"){
                // eslint-disable-next-line camelcase
                let res = await this.$setIdentityView({params:{identity_id:this.userList.length + 1, view_authority_id: this.userList.length + 1}});
                res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"})
            }
        }
    },
    async created(){
        await this.$getUserList().then(res=>this.userList = res.data.data);
        await this.$getIdentity().then(res=>this.optionsArr1 = res.data.data);
        // console.log(this.userList);
    }
};
</script>

<style lang="scss" scoped>
.addUser {
  width: 100%;
  height: 100%;
  h2 {
    padding: 30px 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  .cont-out {
    width: 100%;
    box-sizing: border-box;
    margin: 0 24px 24px 28px;
    display: flex;
    flex-wrap: wrap;
    .cont-in {
      width: 32%;
      height: 321px;
      border: 1px dotted #999;
      border-radius: 10px;
      min-height: 280px;
      padding: 0.5px;
      .form {
        display: flex;
        flex-direction: column;
        margin: 10px;
        line-height: 50px;
        .top-btn{
          display: flex;
          margin-bottom: 10px;
        }
      }
    }
  }
  .cls{
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
</style>


