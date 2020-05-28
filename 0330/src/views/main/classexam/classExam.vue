<template>
<div class="classExam">
   <h2>班级管理</h2>
    <div class="cont">
      <div class="in-cont">
         <div class="top">
        <el-button type="primary" @click="dialogVisible = true">
          <i class="el-icon-plus"></i>
          <span>添加班级</span>
          </el-button>
      </div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="班级名"
      width="345">
      <template slot-scope="scope">
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="课程名"
      width="345">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
        <el-table-column
      label="教室名"
      width="345">
      <template slot-scope="scope">
        <span>{{ scope.row.address }}</span>
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
    </div>
  </div>
  <div class="classExam-dialog">
      <el-dialog
        title="添加班级"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
          <div class="classExam-dialog-item" v-for="(v,i) in dilog" :key="i">
          <div class="text">{{v.name}} ：</div>
          <el-input v-model="v.value" :placeholder="v.name"></el-input>
          </div>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeVisible">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: "1707C",
                name: "渐进式开发(react)",
                address: "31518"
            }, {
                date: "1707C",
                name: "渐进式开发(react)",
                address: "31517"
            }, {
                date: "1707C",
                name: "渐进式开发(react)",
                address: "31519"
            }, {
                date: "1707C",
                name: "渐进式开发(react)",
                address: "31516"
            }],
            dialogVisible: false,
            dilog:[
                {name:"班级名", value:""},
                {name:"教室名", value:""},
                {name:"课程名", value:""},
            ],
            isdialog:"add"
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm("确认关闭？").then(()=> {
                done();
            }).catch(() => {});
        },
        async changeVisible() {
            if(this.isdialog === "add"){
                this.dialogVisible = false;
                let flag = this.dilog.every((item) => item.value !== "");
                if(flag){
                    //eslint-disable-next-line camelcase
                    let res = await this.$addClassExam({grade_name:this.dilog[0].value, room_id:this.dilog[1].value, subject_id:this.dilog[2].value});
                    console.log(res);
                    
                    res.data.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"warning"});
                    return
                }   
                this.$message({message:`${!this.dilog[0].value && this.dilog[0].name || !this.dilog[1].value && this.dilog[1].name || !this.dilog[2].value && this.dilog[2].name}参数不能为空`, type: "warning"}) 
            }else if(this.isdialog === "edit"){
                //eslint-disable-next-line camelcase
                let res = await this.$putClassExam({ grade_id:"t8ubfs-4zkz-13405b-3lhfnn", grade_name:this.dilog[0].value, room_id:this.dilog[1].value, subject_id:this.dilog[2].value});
                res.data.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"warning"});
                console.log(1);
                
            }
        },
        handleEdit(index){
            this.dialogVisible = true;
            this.isdialog = "edit";
            console.log(index, this.isdialog); 
        }
    }
}
</script>

<style lang="scss" scoped>
.classExam{
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
    .top{
      margin-bottom: 14px;
    }
  .in-cont{
    padding: 30px 25px;
    }
  }
  .classExam-dialog{
    .classExam-dialog-item{
    padding-bottom: 20px;
    height: 80px;
    line-height: 40px;
    }
  }
}
</style>
