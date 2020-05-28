<template>
    <div class="main">
      <div class="main-top">
        <div class="logo">
          <img src="@/assets/bawei.png" alt="" srcset="">
        </div>
        <div class="Personal">
          <div class="info">
            <div class="Avatar"></div>
            <div class="username">w916peach</div>
          </div>
        </div>
      </div>
     <div class="main-bottom">
        <div class="left">
          <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#232A41"
          text-color="#fff"
          active-text-color="#ffd04b">
         <el-submenu :index="(index++)+''" v-for="(item,index) in list"
          :key="index">
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
          <router-link  tag="span"  v-for="(v,i) in item.children" :key="i" :to="v.to">
            <el-menu-item :index="(index++)+'-'+v.id">
                {{v.name}}
            </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu>
      </div>
      <div class="right">
          <router-view></router-view>
        </div>
    </div>
     </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    name:"试题管理",
                    children:[
                        {name:"添加试题",
                            id:"1",
                            to:"/main/addQuestions"},
                        {name:"试题分类",
                            id:"2",
                            to:"/main/questionsType"},
                        {name:"查看试题",
                            id:"3",
                            to:"/main/watchQuestions"},
                    ]
                },
                {
                    name:"用户管理",
                    children:[
                        {name:"添加用户",
                            id:"4",
                            to:"/main/addUser"},
                        {name:"用户展示",
                            id:"5",
                            to:"/main/showUser"},
                    ]
                },
                {
                    name:"考试管理",
                    children:[
                        {name:"添加考试",
                            id:"6",
                            to:"/main/addExam"},
                        {name:"试卷列表",
                            id:"7",
                            to:"/main/exam/list"},
                    ]
                },
                {
                    name:"班级管理",
                    children:[
                        {name:"班级管理",
                            id:"8",
                            to:"/main/grade"},
                        {name:"教室管理",
                            id:"9",
                            to:"/main/room"},
                        {name:"学生管理",
                            id:"10",
                            to:"/main/student"},
                    ]
                },
                {
                    name:"阅卷管理",
                    children:[
                        {name:"待批班级",
                            id:"11",
                            to:"/main/paper/classlist"}
                    ]
                }
            ]
        }
    }
};
</script>
<style lang="scss" scoped>
.main{
  // height: 100vh;
  // width: 100vw;
  overflow: hidden;
.main-top{
   height: 64px;
  padding: 0 50px;
   .logo{
     width: 120px;
     height: 30px;
     float: left;
     margin: 16px 28px 16px 0;
    img{
    width: 100%;
    height: 100%;
  }
   }
   .Personal{
    color: #333;
    float: right;
    box-sizing: border-box;
    .info{
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    .Avatar{
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    text-align: center;
    background: #ccc;
    color: #fff;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 50%;
    margin-right: 10px;
    }
    .username{
      font-size: 13px;
      color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}
.main-bottom{
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  padding-bottom: 64px;
  .left{
  width: 200px;
  background: #232A41;
  overflow: auto;
  ul{
    width: 201px;
    min-width: 201px;
    span{
      display:inline-block;
      width: 100%;
      height: 100%;
    }
   }
  }
  .left::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .right{
    flex: 1;
    background: #f0f2f5;
    overflow: auto;
  }
  .right::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  }
}
  
</style>
