<template>
  <div class="addQuestions">
   <h2>添加试题</h2>
    <div class="cont">
      <div class="in-cont">
      <h4>题目信息</h4>
      <div class="ipt">
      <h4>题干</h4>
      <el-input v-model="Question" placeholder="请输入题目标题，不超过20个字"></el-input>
      </div>
      
      <div class="form-item">
      <div class="theme">题目主题</div>
      <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar>
      </div>
     
    <div class="wrap">
      <div class="item" v-for="(v,i) in selectList" :key="i">
        <div>{{v.name}}</div>
        <el-select v-model="v.value">
        <el-option
        v-for="item in v.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
        </el-select>
        </div>
      </div>
      <div class="form-item">
      <div class="info">答案信息</div>
       <editor-bar v-model="detail1" :isClear="isClear1" @change="change1"></editor-bar>
       </div>
       <el-button type="primary" class="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import EditorBar from "@/components/editoritem"
export default {
    name:"addQuestions",
    components: { EditorBar },
    data() {
        return {
            isClear: false,  
            detail:"",
            isClear1: false,
            detail1:"",
            Question:"",
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
                    value: "周考1",
                    name: "请选择考试类型"
                },
                {
                    options: [{
                        value: "选项1",
                        label: "JavaScript上"
                    }, {
                        value: "选项2",
                        label: "JavaScript下"
                    }, {
                        value: "选项3",
                        label: "模块化开发"
                    }, {
                        value: "选项4",
                        label: "移动端开发"
                    }, {
                        value: "选项5",
                        label: "node基础"
                    }, {
                        value: "选项6",
                        label: "组件化开发(vue)"
                    }, {
                        value: "选项7",
                        label: "渐进式开发"
                    }, {
                        value: "选项8",
                        label: "项目实战"
                    }, {
                        value: "选项9",
                        label: "JavaScript高级"
                    }, {
                        value: "选项10",
                        label: "node高级"
                    }],
                    value: "JavaScript上",
                    name: "请选择课程类型"
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
                    value: "简答题",
                    name: "请选择题目类型"
                }
            ]
        }
    },  
    methods: {
        change(val) {
            console.log(val)
        },
        change1(val) {
            console.log(val)
        },
    }
}
</script>

<style lang="scss" scoped>
.addQuestions{
  width: 100%;
  height: 100%;
  h2{
    padding: 30px 24px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
  }
  .cont{
    box-sizing: border-box;
    border-radius: 10px;
    margin:0 24px;
    background: #ffffff;
  .in-cont{
    padding: 30px 25px;
    .ipt{
      margin-bottom: 24px;
    }
    h4{
    color: rgba(0,0,0,.85);
    font-weight: 500;
    margin-top: 0;
    margin-bottom: .5em;
    }
    .form-item {
    padding: 0 0 8px;
    margin: 0;
    display: block;
    text-align: left;
    line-height: 2;
    white-space: initial;
    margin-bottom: 24px;
      }
    .wrap{
      .item{
          font-size: 14px;
          font-variant: tabular-nums;
          line-height: 2;
          color: rgba(0, 0, 0, 0.65);
          margin-bottom: 24px;
          vertical-align: top;
        } 
      }
      .submit{
          margin-bottom: 24px;
      }
    }
  }
}
</style>
