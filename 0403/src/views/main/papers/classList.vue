<template>
  <div class="classList">
    <h2>待批班级</h2>
    <div class="cont">
      <div class="in-cont">
        <div class="table">
    <el-table
    :data="classList.slice((currentPage-1)*pageSize,currentPage * pageSize)"
    style="width: 100%">
    <el-table-column
      label="班级名"
      prop="className">
    </el-table-column>
    <el-table-column
      label="课程名"
      prop="courseName">
    </el-table-column>
    <el-table-column
      align="center"
      label="阅卷状态"
      prop="marking">
    </el-table-column>
    <el-table-column
      align="center"
      label="成材率"
      prop="timber">
    </el-table-column>
    <el-table-column
      align="center"
      label="操作">
     <el-button type="primary" plain  size="mini" @click="Batch(item)">批卷</el-button>
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
  </div>
</template>

<script>
export default {
    data(){
        return{
            currentIndex:0,
            classList:[],
            currentPage:1,
            pageSize:10,
        }
    },
    methods:{
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
        Batch(){
            this.$router.push({
                name: "list",
                params: {
                    item:"这里打算把批卷详情的数组传过去渲染"
                }
            })
        }
    },
    async created(){
        let res = await this.$getClassList();
        
        res.data.exam.forEach(item =>{
            this.classList.push({
                className: item.student_name,
                courseName: item.student_id,
                marking: item.start_time,
                timber: item.end_time,
            })
        })
        //获取路由上传递过来的参数item项 用于编辑
        // console.log(this.$route);
    }
}
</script>

<style lang="scss" scoped>
.classList{
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
    margin:0 24px;
    background: #ffffff;
    }
    .pagination{
    text-align: right;
    margin:  0 0px 30px 0;
    background: #ffffff;
    .el-pagination {
      padding: 20px 20px;
      }
    }
  }
</style>

