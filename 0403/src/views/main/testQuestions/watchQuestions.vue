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
             <div class="right-btn">
              <el-button type="primary" class="submit" @click="watchSubmit">
                <i class="el-icon-search"></i>
                <span>提交</span> </el-button>
          </div>
          </div>
        </div>
      </div>
    </div>
        <div class="wrap-bottom">
      <div class="wrap-out">
        <div class="wrap-in">
        <div class="item" v-for="(v,i) in getfilterQuestions.slice((currentPage-1)*pageSize,currentPage * pageSize)" :key="i">
         <div class="left"><a><div>
         <div><h4>{{v.title}}</h4></div></div><div><div class="tag"><div class="tag1">{{v.questions_type_text}}</div><div class="tag2">{{v.subject_text}}</div>
         <div class="tag3">{{v.exam_name}}</div></div><span>dingshaoshan 发布</span></div></a></div>
         <ul class="right"><li><a  @click="sendItemEdit(v)">编辑</a></li></ul></div>
          <div class="pagination">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10,20,50,100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total=" getfilterQuestions.length">
    </el-pagination>
    </div>
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
                        value: "周考1",
                        label: "周考1"
                    }, {
                        value: "周考2",
                        label: "周考2"
                    }, {
                        value: "周考3",
                        label: "周考3"
                    }, {
                        value: "月考",
                        label: "月考"
                    }],
                    value: "",
                    name: "考试类型"
                },
                {
                    options: [],
                    value: "",
                    name: "题目类型"
                }
            ],
            submitList:["All", "javaScript上", "javaScript下", "模块化开发", "移动端开发", "node基础", "组件化开发(vue)", "渐进式开发(react)", "项目实战", "javaScript高级", "node高级"],
            getfilterQuestions:[],
            cur:null,
            allFlag:null,
            currentPage:1,
            pageSize:5,
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
        },
        handleSizeChange(val) {
            this.pageSize = val;
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
        },
        sendItemEdit(item){
            this.$router.push({path: `/main/addQuestions/${item.questions_id}`})
        },
        async  watchSubmit(){
            console.log(this.selectList[0].value, this.selectList[1].value); 
            this.getfilterQuestions = JSON.parse(localStorage.getItem("getfilterQuestions"));
            if(this.selectList[0].value ||  this.selectList[1].value ){
                if(this.selectList[0].value){
                    this.getfilterQuestions = this.getfilterQuestions.filter(item =>item.exam_name === this.selectList[0].value);
                }else if( this.selectList[1].value){
                    this.getfilterQuestions = this.getfilterQuestions.filter(item =>item.questions_type_text ===  this.selectList[1].value);
                }
            } 
            if(this.selectList[0].value  && this.selectList[1].value){
                // let questionsArr = await this.$getfilterQuestions();
                // this.getfilterQuestions = questionsArr.data.data;
                this.getfilterQuestions = this.getfilterQuestions.filter(item => item.exam_name === this.selectList[0].value && item.questions_type_text ===  this.selectList[1].value);
            }
        },
        async initFn(){
            //或取所有题型的接口
            await this.$getfilterQuestions().then(res=>this.getfilterQuestions = res.data.data);
            // console.log(this.getfilterQuestions);
        }
    },
    async created(){
        this.initFn()
        // eslint-disable-next-line no-unused-vars
        let getQuestionsArr = [];
        await this.$getQuestions().then(res=> getQuestionsArr = res.data.data);
       
        getQuestionsArr.forEach(item =>{
            this.selectList[1].options.push({
                value: item.questions_type_text,
                bable: item.questions_type_text,
            })
        })
        
        //localstorage 执行时应放在 最后执行
        localStorage.setItem("getfilterQuestions", JSON.stringify(this.getfilterQuestions))
    }
};
</script>

<style lang="scss" scoped>
.watchQuestions {
  width: 100%;
  height: 100%;
  min-width: 960px;
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
         .left{
          flex: 1.2;
          display: flex;
          .select-item{
            display: flex;
            justify-content: space-around;
            min-width: 500px;
            .item{
              display: flex;
              height: 66px;
              margin-top: 45px;
              .b-text{
                 width: 110px;
                 line-height: 35px;
                 text-align: center;
              }
            }
          }
          .right-btn{
            margin-left: 50px;
          button{
                width: 130px;
                margin-top: 45px;
              }
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
        width: 95%;
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
        margin-right: 50px;
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
   .pagination{
    text-align: right;
    margin:  0 0px 30px 0;
    background: #ffffff;
    margin-right: 50px;
    .el-pagination {
      padding: 20px 20px;
    }
  }

</style>

