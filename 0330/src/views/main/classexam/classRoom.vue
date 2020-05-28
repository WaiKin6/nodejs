<template>
<div class="classRoom">
   <h2>教室管理</h2>
    <div class="cont">
      <div class="in-cont">
         <div class="top">
        <el-button type="primary" @click="dialogVisible = true">
          <i class="el-icon-plus"></i>
          <span>添加教室</span>
          </el-button>
      </div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="教室号"
      width="610">
      <template slot-scope="scope">
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作"  width="610">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
  <div class="classRoom-dialog">
      <el-dialog
        title="添加班级"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
          <div class="classRoom-dialog-item" v-for="(v,i) in dilog" :key="i">
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
                date: "1704A",
            }, {
                date: "1705D",
            }, {
                date: "1705B",
            }, {
                date: "1705C",
            }],
            dialogVisible: false,
            dilog:[
                {name:"教室名", value:""},
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
.classRoom{
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
  .classRoom-dialog{
    .classRoom-dialog-item{
      .text{
      height: 40px;
      line-height: 40px;
      }
    }
  }
}
</style>
