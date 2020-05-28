<template>
    <div class="main">
      <div class="left">
      <el-menu
        v-for="(item,index) in list"
        :key="index"
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#232A41"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
          <router-link  tag="span"  v-for="(v,i) in item.children" :key="i" :to="v.to">
            <el-menu-item :index="'1-'+index++">
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
                            to:"/main/addQuestions"},
                        {name:"试题分类",
                            to:"/main/questionsType"},
                        {name:"查看试题",
                            to:"/main/watchQuestions"},
                    ]
                },
                {
                    name:"用户管理",
                    children:[
                        {name:"添加用户",
                            to:"/main/addUser"},
                        {name:"用户展示",
                            to:"/main/showUser"},
                    ]
                },
                {
                    name:"考试管理",
                    children:[
                        {name:"添加考试",
                            to:"/main/addExam"},
                        {name:"试卷列表",
                            to:"/main/exam/list"},
                    ]
                },
                {
                    name:"班级管理",
                    children:[
                        {name:"班级试题",
                            to:"/main/grade"},
                        {name:"教室管理",
                            to:"/main/room"},
                        {name:"学生管理",
                            to:"/main/student"},
                    ]
                },
                {
                    name:"阅卷管理",
                    children:[
                        {name:"待批班级",
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
  height: 100vh;
  width: 100vw;
  display: flex;
  .left{
  width: 201px;
  background: #232A41;
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
  .right{
    flex: 1;
  }
}

  
</style>
