<template>
  <div class="students">
      <h2>学生管理</h2>
    <form>
        <div class="ipt"><el-input v-model="studentName" @input="changeStudentName" placeholder="输入学生姓名"  size="small"></el-input></div>
        <div class="sele">
        <el-select  size="small"  v-model="v.value" :placeholder="v.placeholder" v-for="(v,index) in seleList" :key="index">
        <el-option
          v-for="item in v.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
        </el-select>
        </div>
        <div class="sear">
            <el-button type="primary"  size="small" @click="searchFn">搜索</el-button>
        </div>
        <div class="reset">
            <el-button type="primary"  size="small" @click="resetFn">重置</el-button>
        </div>
      </form>
      
     <div class="table">
       <!-- table + pagination 我还是喜欢动态的切割数据，然后再过滤 -->
       <!-- 计算公式 data.slice((当前页-1)*每页显示的条数,当前页*每页显示的条数) -->
      <el-table
      :data="studentList.slice((currentPage-1)*pageSize,currentPage * pageSize).filter(data => !search || data.student_id.includes(search))"
      style="width: 100%">
      <el-table-column
        label="姓名"
        prop="student_name">
      </el-table-column>
      <el-table-column
        label="学号"
        prop="student_id">
      </el-table-column>
           <el-table-column
        label="班级"
        prop="grade_name">
      </el-table-column>
           <el-table-column
        label="教室"
        prop="room_text">
      </el-table-column>
      <el-table-column
        label="密码"
        prop="student_pwd">
      </el-table-column>
      <el-table-column
        align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          :value="scope"
          size="mini"
          placeholder="请输入学号"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      :total="studentList.length">
    </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            studentName:"",
            classRoom:[],
            className:[],
            seleList:[
                {
                    options: [],
                    value: "",
                    placeholder:"班级名"
                },
                {
                    options:[],
                    value: "",
                    placeholder:"请选择教室号"
                }
            ],
            search: "",
            currentPage:1,
            pageSize:5,
            studentList:[],
            studentId:""
        }
    }, 
    methods: {
        async handleDelete(index, row) {
            //student_id// 
            this.studentId = row.student_id;
            console.log(index, this.studentId);
            
            // eslint-disable-next-line camelcase
            let res = await this.$delStudent(this.studentId);
            res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"});
            this.initFn();
            return
        },
        handleSizeChange(val) {
            this.pageSize = val;
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
        },
        // eslint-disable-next-line vue/no-dupe-keys
        async searchFn(){

            let StudentsArr = await this.$getStudents();
            this.studentList = StudentsArr.data.data;
            if(this.studentName.trim().length > 0 || this.seleList[0].value || this.seleList[1].value ){
                if(this.studentName.trim().length > 0){
                    this.studentList = this.studentList.filter(item =>item.student_name.includes(this.studentName));
                }else if(this.seleList[0].value){
                    this.studentList = this.studentList.filter(item =>item.grade_name === this.seleList[0].value);
                }else if(this.seleList[1].value){
                    this.studentList = this.studentList.filter(item =>item.room_text === this.seleList[1].value);
                }
            }
            let flag1 = this.studentName.trim().length > 0 && this.seleList[0].value;
            let flag2 = this.studentName.trim().length > 0 && this.seleList[1].value;
            let flag3 = this.seleList[0].value  && this.seleList[1].value;
            let flag4 = this.studentName.trim().length > 0 && this.seleList[0].value && this.seleList[1].value;
            if(flag1){
                this.studentList = this.studentList.filter(item => item.student_name.includes(this.studentName) && item.grade_name === this.seleList[0].value);
            }
            if(flag2){
                this.studentList = this.studentList.filter(item => item.student_name.includes(this.studentName) && item.room_text === this.seleList[1].value);
            }
            if(flag3){
                this.studentList = this.studentList.filter(item => item.grade_name === this.seleList[0].value && item.room_text === this.seleList[1].value);
            }
            if(flag4){
                this.studentList = this.studentList.filter(item => item.student_name.includes(this.studentName) && item.grade_name === this.seleList[0].value && item.room_text === this.seleList[1].value);
            }
        },
        async resetFn(){
            this.studentName = "",
            this.seleList[0].value = "",
            this.seleList[1].value = "",
            this.initFn();
        },
        changeStudentName(){
          
            if(this.studentName.trim().length === 0){
                this.initFn();
            }
        },
        async initFn(){
            await this.$getStudents().then(res => this.studentList = res.data.data);
        }
    },
    async  created(){
        this.initFn();
        await this.$getClassRoom().then(res=>this.classRoom = res.data.data);
        await this.$getClassExam().then(res=>this.className = res.data.data);

        this.classRoom.forEach(item=>{
            this.seleList[1].options.push({value: item.room_text, label: item.room_text})
        })
        this.className.forEach(item=>{
            this.seleList[0].options.push({value: item.grade_name, label: item.grade_name})
        })
    }
}
</script>

<style lang="scss" scoped>
.students{
  width: 100%;
  height: 100%;
  min-width: 960px;
  h2{
    padding: 30px 24px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
  }
  form{
    display: flex;
    .ipt,.sear,.reset{
      padding-left: 22px;
    }
    .sele{
      .el-select{
          padding-left: 22px;
      }
    }
    button{
      background: linear-gradient(-90deg,#4e75ff,#0139fd);
      width: 117px;
      font-size: 13px;
    }
  }
  .table{
    margin: 14px 22px 0 22px;
  }
  .pagination{
    text-align: right;
    margin:  0 22px 30px 22px;
    background: #ffffff;
    .el-pagination {
      padding: 20px 12px;
    }
  }
}
  
</style>
