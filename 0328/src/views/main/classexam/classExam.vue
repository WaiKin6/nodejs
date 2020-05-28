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
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
            ]
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm("确认关闭？").then(()=> {
                done();
            }).catch(() => {});
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
