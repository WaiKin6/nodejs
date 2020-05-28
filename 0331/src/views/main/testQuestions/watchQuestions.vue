<template>
  <div class="watchQuestions">
    <h2>查看试题</h2>
    <div class="wrap">
      <div class="wrap-out">
        <div class="top">
          <div class="left">课程类型 :</div>
          <div class="right">
            <div @click="changeItem(i,v)"  :id="[allFlag?'cls':'']" :class="{'cls item':i>0&&i===cur,'item':true}" v-for="(v,i) in submitList" :key="i">{{v}}</div>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <div class="select-item">
              <div class="item" v-for="(v,i) in selectList" :key="i">
                <div class="b-text">{{v.name}} :</div>
                <el-select v-model="v.value" size="1">
                  <el-option
                    v-for="item in v.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="right">
              <el-button type="primary" class="submit">
                <i class="el-icon-search"></i>
                <span>提交</span> </el-button>
          </div>
        </div>
      </div>
    </div>
        <div class="wrap-bottom">
      <div class="wrap-out">
        <div class="wrap-in">
        <div class="item" v-for="(v,i) in 5" :key="i">
         <div class="left"><a href="/public/spa/spa/main/questions/detail?id=4t0rar-39c33-wq098t-phh5ht"><div>
         <div><h4>机器人归位</h4></div></div><div><div class="tag"><div class="tag1">代码补全</div><div class="tag2">javaScript上</div>
         <div class="tag3">周考1</div></div><span>dingshaoshan 发布</span></div></a></div>
         <ul class="right"><li><a href="javascript:;">编辑</a></li></ul></div>
         </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            selectList:[
                {
                    options: [{
                        value: "选项1",
                        label: "周考1"
                    }, {
                        value: "选项2",
                        label: "周考2"
                    }, {
                        value: "选项3",
                        label: "周考3"
                    }, {
                        value: "选项4",
                        label: "月考"
                    }],
                    value: "",
                    name: "考试类型"
                },
                {
                    options: [{
                        value: "选项1",
                        label: "代码阅读题"
                    }, {
                        value: "选项2",
                        label: "代码补全"
                    }, {
                        value: "选项3",
                        label: "修改bug"
                    }, {
                        value: "选项4",
                        label: "手写代码"
                    }],
                    value: "",
                    name: "题目类型"
                }
            ],
            submitList:["All", "javaScript上", "javaScript下", "模块化开发", "移动端开发", "node基础", "组件化开发(vue)", "渐进式开发(react)", "项目实战", "javaScript高级", "node高级"],
            cur:null,
            allFlag:null
        }
    },
    methods:{
        changeItem(i, item){
            this.cur = i;
            if(item === "All"){
                this.allFlag = !this.allFlag;
            }else{
                this.allFlag = null;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.watchQuestions {
  width: 100%;
  height: 100%;
  h2 {
    padding: 30px 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  .wrap {
    background: rgb(255, 255, 255);
    margin: 0px 24px;
    border-radius: 10px;
    .wrap-out {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      margin: 0 30px;
      .top {
        display: flex;
        margin-top: 24px;
        .left{
          width: 110px;
          text-align: center;
        }
        .right{
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          .item{
            font-size: 12px;
            border-radius: 2px;
            padding: 2px 7px;
            margin-right: 8px;
            margin-bottom: 4px;
          }
        }
      }
      .bottom {
        min-width: 1600px;
        display: flex;
        height: 150px;
        line-height: 110px;
         .left{
          flex: 1.2;
          display: flex;
          .select-item{
            display: flex;
            justify-content: space-around;
            min-width: 500px;
            .item{
              display: flex;
              .b-text{
                 width: 110px;
                 text-align: center;
              }
            }
          }
        }
        .right{
          flex: 1;
          .submit{
            width: 110px;
            margin-left: 50px;
            border-radius: 4px!important;
            border: 0!important;
            font-size: 14px!important;
            color: #fff!important;
            background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
            }
          }
        }
      }
    }
    .cls{
        background: blue;
        color: #ffffff;
    }
     #cls{
        background: blue;
        color: #ffffff;
    }
    .tag1{
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
    }
    .tag2{
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff;
    }
    .tag3{
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591;
    }
    .wrap-bottom {
    background: rgb(255, 255, 255);
    margin: 20px 24px;
    border-radius: 10px;
    .wrap-out {
    width: 100%;
    height: 100%;
      font-size: 14px;
      margin: 0 30px;
      .wrap-in{
        width: 100%;
        height: 100%;
        padding-top: 30px;
        .item{
        display: flex;
        border-bottom: 1px solid #ccc;
        .left{
        flex: 5;
        display: flex;
        flex-direction: column;
        margin-top: 14px;
        a{
        text-decoration: none; 
        color: black;
        } 
        h4{
          color: rgba(0, 0, 0, 0.65);
          margin-bottom: 4px;
          font-size: 15px;
          line-height: 22px;
          font-weight: 400;
          margin-bottom: 10px;
        }
        span{
          color: blue;
        }
        .tag{
          display: flex;
          div{
            margin-bottom: 10px;
            border: 1px solid #ccc;
            margin-right: 12px;
            font-size: 12px;
            padding: 3px;
            border-radius: 2px;
          }
        }
      }
      .right{
        flex: 1;
        text-align: center;
        line-height: 110px;
        a{
        text-decoration: none; 
        color: blue;
            }  
          }
        }
      }
    }
  }
}

</style>
