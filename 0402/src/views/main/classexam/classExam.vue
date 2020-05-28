<template>
<div class="classExam">
   <h2>班级管理</h2>
    <div class="cont">
      <div class="in-cont">
         <div class="top">
        <el-button type="primary" @click="dialogVisible = true;iptFlag = false;ruleForm.name = ''">
          <i class="el-icon-plus"></i>
          <span>添加班级</span>
          </el-button>
      </div>
  <div class="table">
  <el-table
    :data="classList"
    style="width: 100%">
    <el-table-column
      label="班级名"
      width="345">
      <template slot-scope="scope">
        <span>{{ scope.row.grade_name }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="课程名"
      width="345">
      <template slot-scope="scope">
        <span>{{ scope.row.room_text }}</span>
      </template>
    </el-table-column>
        <el-table-column
      label="教室名"
      width="345">
      <template slot-scope="scope">
        <span>{{ scope.row.subject_text }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作"  width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="pagination">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10,20,50,100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="classList.length">
    </el-pagination>
    </div>
    </div>
    </div>
  </div>
  <div class="classExam-dialog">
      <el-dialog
        title="添加班级"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
  <div class="textDialog">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item :label="dilog.className" prop="name">
    <el-input v-model="ruleForm.name" :disabled="iptFlag"></el-input>
    </el-form-item>
    <el-form-item :label="dilog.classRoomNum" prop="classRoom">
    <el-select v-model="ruleForm.classRoom" placeholder="请选择教室号">
    <el-option v-for="(v, i) in roomList" :key="i" :label="v.room_text" :value="v.room_id"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item :label="dilog.curriculumName" prop="curriculum">
    <el-select v-model="ruleForm.curriculum" placeholder="请选择课程名">
      <el-option v-for="(v, i) in subjectList" :key="i" :label="v.subject_text" :value="v.subject_id"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">取消</el-button>
    </el-form-item>
  </el-form>
</div>
    </el-dialog>
  </div>
</div>
</template>

<script>
// import axios from "axios"
export default {
    data() {
        return {
            dialogVisible: false,
            iptFlag:false,
            dilog:{className:"班级名", classRoomNum:"教室号", curriculumName:"课程名" },
            isdialog:"add",
            classList:[],
            roomList:[],
            subjectList:[],
            curIndex:null,
            gradeId:"",
            currentIndex:0,
            currentPage:1,
            pageSize:10,
            ruleForm: {
                name: "",
                classRoom: "",
                curriculum: "",
            },
            rules: {
                name: [
                    { required: true, message: "请输入班级号", trigger: "blur" },
                ],
                classRoom: [
                    { required: true, message: "请选择教室号", trigger: "change" }
                ],
                curriculum: [
                    { required: true, message: "请选择课程名", trigger: "change" }
                ]
            }
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm("确认关闭？").then(()=> {
                done();
            }).catch(() => {});
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
        async submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    return false;
                }
            });
            if(this.isdialog === "add"){
                let flag = this.ruleForm.name && this.ruleForm.classRoom && this.ruleForm.curriculum;
                if(flag){
                    //eslint-disable-next-line camelcase
                    let res = await this.$addClassExam({grade_name:this.ruleForm.name, room_id:this.ruleForm.classRoom, subject_id:this.ruleForm.curriculum});
                    this.initFn()
                    if(res.data.code === 1){
                        this.dialogVisible = false;
                        this.$message({message:res.data.msg, type :"success"});
                        return
                    }
                    this.$message({message:res.data.msg, type :"warning"});
                    return
                }   
                this.$message({message:`${!this.ruleForm.name && this.dilog.className || !this.ruleForm.classRoom && this.dilog.classRoomNum || !this.ruleForm.curriculum && this.dilog.curriculumName}参数不能为空`, type: "warning"}) 
            }else if(this.isdialog === "edit"){
                //eslint-disable-next-line camelcase
                let res = await this.$putClassExam({ grade_id:this.gradeId, grade_name:this.ruleForm.name, room_id:this.ruleForm.classRoom, subject_id:this.ruleForm.curriculum});
                this.initFn()
                if(res.data.code === 1){
                    this.dialogVisible = false;
                    this.$message({message:res.data.msg, type :"success"});
                    return
                }
                this.$message({message:res.data.msg, type :"warning"});
            }
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.dialogVisible = false;
        },
        handleEdit(index, row){
            this.curIndex = index;
            this.gradeId = row.grade_id;
            this.dialogVisible = true;
            this.isdialog = "edit";
            this.iptFlag = true;
            this.ruleForm.name = row.grade_name; 
            console.log(row);
        },
        async handleDelete(index, row){
            this.gradeId = row.grade_id;
            //eslint-disable-next-line camelcase
            //await axios({method:"delete", url:"/manger/grade/delete", params:{grade_id:this.gradeId}});
            //eslint-disable-next-line camelcase
            await this.$delClassExam({data:{grade_id:this.gradeId}});
            this.initFn()
        },
        async initFn(){
            await this.$getClassExam().then(res=> this.classList  = res.data.data);
            // console.log(this.classList, this.roomList, this.subjectList);
        }
    },
    created(){
        this.initFn()
        this.$getClassRoom().then(res=> this.roomList = res.data.data); 
        this.$getSubject().then(res=> this.subjectList = res.data.data); 
    }
}
</script>

<style lang="scss" scoped>
.classExam{
  width: 100%;
  height: 100%;
  min-width: 1340px;
  h2{
    padding: 30px 24px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
  }
  .cont{
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 24px 24px 24px; 
    background: #ffffff;
    .top{
      margin-bottom: 14px;
    }
  .in-cont{
    padding: 30px 50px 14px 25px;
    }
  }
    .pagination{
    text-align: right;
    background: #ffffff;
    .el-pagination {
      padding: 20px 35px 0px 20px;
      }
    }
}
</style>

<style lang="scss">
  .classExam-dialog{
    .el-select{
      width: 100%;
    }
  }
</style>
