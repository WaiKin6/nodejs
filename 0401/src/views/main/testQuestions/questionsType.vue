<template>
  <div class="questionsType">
    <h2>试题分类</h2>
    <div class="wrap">
      <div class="wrap-out">
      <div class="top">
        <el-button type="primary" @click="dialogVisible = true">
          <i class="el-icon-plus"></i>
          <span>添加类型</span>
          </el-button>
      </div>
      <div class="bottom">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="类型ID" width="180"></el-table-column>
          <el-table-column prop="name" label="类型名称" width="180"></el-table-column>
          <el-table-column prop="address" label="操作"></el-table-column>
        </el-table>
      </div>
     </div>
    </div>
    <el-dialog
        title="创建新类型"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
          <el-input v-model="typeName" placeholder="请输入类型名称"></el-input>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addClass">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            resData:[],
            dialogVisible: false,
            typeName:""
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(()=> {
                    done();
                })
                .catch(() => {});
        },
        async addClass(){
            this.dialogVisible = false;
            let res = await  this.$addQuestions({params:{text:this.typeName, sort:this.resData.length + 1}});
            window.location.reload()
            res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"});
        },
    },
    async created(){
        let res = await this.$getQuestions();
        this.resData = res.data.data;
        this.resData.forEach((v, i)=>{
            this.tableData.push( {
                date: v.questions_type_id,
                name: v.questions_type_text,
                address: `上海市普陀区金沙江路158${i}弄`,
            })
        })
    }
};
</script>

<style lang="scss" scoped>
.questionsType {
  width: 100%;
  height: 100%;
  h2 {
    padding: 30px 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  .wrap{
   padding: 0 30px;
  .wrap-out{
    background: rgb(255, 255, 255);
    padding: 24px;
    margin: 0px 0px 20px;
    border-radius: 10px;
  }
  .top{
    margin-bottom: 25px;
  }
  }
  .bottom{
   .table,.el-table{
        color: black!important;
    }
  }
}
</style>
