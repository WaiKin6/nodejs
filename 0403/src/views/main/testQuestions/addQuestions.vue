<template>
  <div class="addQuestions">
   <h2>{{itemData.length>0?"修改试题":"添加试题"}}</h2>
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
       <el-button type="primary" class="submit" @click="quesTest">提交</el-button>
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
            userInfo:"",
            itemData:[],
            selectList:[
                { //试题类型的数据
                    options: [],
                    value: "周考1",
                    name: "请选择考试类型"
                },
                {
                    options: [],
                    value: "JavaScript上",
                    name: "请选择课程类型"
                },
                {
                    options: [],
                    value: "简答题",
                    name: "请选择题目类型"
                }
            ]
        }
    },  
    methods: {
        change() {
            // console.log(val)
        },
        change1() {
            // console.log(val)
        },
        async  quesTest(){
            //编辑
            if(this.itemData.length > 0){
              
                // eslint-disable-next-line camelcase
                let res = await  this.$questionsUpdate({questions_id:this.itemData[0].questions_id, questions_type_id:this.selectList[2].value, questions_stem:this.detail, subject_id:this.selectList[1].value, exam_id:this.selectList[0].value, questions_answer:this.detail1, title:this.Question});
                res.data.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"});
                this.$router.go(-1);
                return
            }
            //添加
            // eslint-disable-next-line camelcase
            let addRes = await  this.$createTest({questions_type_id:this.selectList[2].value, questions_stem:this.detail.slice(3, this.detail.length - 4), subject_id:this.selectList[1].value, exam_id:this.selectList[0].value, user_id:this.userInfo, questions_answer:this.detail1.slice(3, this.detail1.length - 4), title:this.Question});
            //添加成功弹出弹框并清除内容请  
            if(addRes.data.code === 1){
                this.$message({message:addRes.data.msg, type :"success"});
                this.selectList[2].value = "";
                this.Question = "";
                this.selectList[1].value = "";
                this.selectList[0].value = "";
                this.detail1 = "";
                this.detail = "" 
            }else if(addRes.data.code === 0){
                this.$message({message:addRes.data.msg, type :"waring"});
            }
        }
    },
    async created(){
        //以下都是selectist的options项

        //获取所有试题类型的接口
        let testType = await this.$getQuestions();
        testType.data.data.forEach(item =>{
            this.selectList[2].options.push(
                { 
                    value: item.questions_type_id,
                    label: item.questions_type_text
                }
            )
        })
        //获取所有课程的列表
        let  course = await this.$getSubject();
        course.data.data.forEach(item =>{
            this.selectList[1].options.push(
                { 
                    value: item.subject_id,
                    label: item.subject_text
                }
            )
        })
        //获取所有的考试类型
        let examTypeList = await this.$examType();
        examTypeList.data.data.forEach(item =>{
            this.selectList[0].options.push(
                { 
                    value: item.exam_id,
                    label: item.exam_name
                }
            )
        })
        //getUserInfo 获取当前用户信息id的接口
        await this.$getUserInfo().then(res=>this.userInfo = res.data.data.identity_id);
        

        //依据根据路由通过地址栏url拼接项获取数据
        let filterData =  await this.$getfilterQuestions();
        this.itemData = filterData.data.data.filter(item=>item.questions_id === this.$route.params.id);
        // console.log(this.itemData[0]);
        
        //判断当前是处于一个编辑的环境还是一个添加的环境给所有的输入框设置不同的值
        if(this.itemData.length > 0){
            // eslint-disable-next-line camelcase
            this.selectList[2].value = this.itemData[0].questions_type_id;
            this.Question = this.itemData[0].title;
            this.selectList[1].value = this.itemData[0].subject_id;
            this.selectList[0].value = this.itemData[0].exam_id;
            this.detail1 = this.itemData[0].questions_answer;
            this.detail = this.itemData[0].questions_stem 
        }
    }
}
</script>

<style lang="scss" scoped>
.addQuestions{
  width: 100%;
  height: 100%;
  min-width: 960px;
  h2{
    padding: 30px 24px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
  }
  .cont{
    box-sizing: border-box;
    border-radius: 10px;
    margin:0 24px 30px 24px;
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
