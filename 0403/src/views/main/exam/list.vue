<template>
  <div class="list">
    <h2>考试列表</h2>
    <div class="cont">
      <div class="in-cont">
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
                <el-button type="primary" class="submit" @click="getTestList">
              <i class="el-icon-search"></i>
              <span>提交</span>
            </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="wrap-bottom">
      <div class="wrap-out">
        <div class="wrap-in">
          <div class="top">
            <div class="t-left">试卷列表</div>
            <div class="t-right">
                <el-button :class="{'cls':curIndex === i}" v-for="(v, i) in btnList" :key="i" @click="changetabTitle(i)">{{v.name}}</el-button>
            </div>
            </div> 
    <div class="b-table">
    <el-table
    :data="testList.slice((currentPage-1)*pageSize,currentPage * pageSize)"
    style="width: 100%">
    <el-table-column
      label="试卷信息"
      width="270">
      <template slot-scope="scope">
        <span>{{ scope.row.title}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="班级"
      width="315">
      <template slot-scope="scope">
        <span>{{ scope.row.grade_name.join(" ") }}</span>
      </template>
    </el-table-column>
        <el-table-column
      label="创建人"
      width="156">
      <template slot-scope="scope">
        <span>{{ scope.row.user_name }}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="开始时间"
      width="200">
      <template slot-scope="scope">
        <span>{{ scope.row.start_time}}</span>
      </template>
    </el-table-column>
       <el-table-column
      label="结束时间"
      width="200">
      <template slot-scope="scope">
        <span>{{ scope.row.end_time }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center" width="80">
      <template slot-scope="scope">
         <el-button type="primary" plain  size="mini"
          @click="handleEdit(scope.$index, scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
            </div>
              <div class="pagination">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10,20,50,100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="testList.length">
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
        return{
            currentIndex:0,
            currentPage:1,
            pageSize:10,
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
                    name: "课程"
                }
            ],
            btnList:[{name:"全部"}, {name:"进行中"}, {name:"已结束"}],
            curIndex:0,
            testList:[],
            quesTitle:[]
        }
    },
    methods:{
        changetabTitle(i){
            this.curIndex = i;
        },
        handleEdit(i, row){
            console.log(i, row);
        },
        changeTab(v, i){
            this.currentIndex = i;
        },   
        handleSizeChange(val) {
            this.pageSize = val;
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
        },
        async getTestList(){
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
    },
    async created(){
        let res = await this.$getTestList();
        this.testList = res.data.exam;

        //获取所有课程的列表
        await this.$getSubject().then(res=> this.quesTitle = res.data.data);
        this.quesTitle.forEach( v =>{
            this. selectList[1].options.push(
                {
                    value: v.subject_text,
                    label: v.subject_text
                }
            )
        })
    }
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 100%;
  min-width: 1360px;
  h2 {
    padding: 30px 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  .cont {
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 24px;
    background: #ffffff;
          .bottom {
        display: flex;
        height: 110px;
         .left{
          display: flex;
          .select-item{
            display: flex;
            justify-content: space-around;
            min-width: 500px;
            .item{
              height: 50px;
              margin-top: 30px;
              display: flex;
              .b-text{
                 width: 110px;
                 line-height: 38px;
                 text-align: center;
              }
            }
          }
          .right-btn{
            margin-left: 50px;
            button{
                width: 130px;
                margin-top: 30px;
            }
          }
        }
      }
    }
    .wrap-bottom {
    background: rgb(255, 255, 255);
    margin: 20px 24px;
    border-radius: 10px;
    margin-right: 50px;
    .wrap-out {
    width: 100%;
    height: 100%;
      font-size: 14px;
      margin: 0 30px;
      .wrap-in{
        width: 95%;
        height: 100%;
        padding-top: 30px;
        .top{
          height: 50px;
          .t-left{
            float: left;
            color: rgba(0,0,0,.85);
            font-weight: 500;
            font-size: 20px;;
          }
          .t-right{
            float: right;
          }
        }
        }
      }
    }
    .pagination{
    text-align: right;
    background: #ffffff;
    .el-pagination {
      padding: 20px 35px 20px 20px;
      }
    }
    .cls{
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
</style>
