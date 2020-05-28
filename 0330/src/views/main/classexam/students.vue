<template>
  <div class="students">
      <h2>学生管理</h2>
    <form>
        <div class="ipt"><el-input v-model="studentName" placeholder="输入学生姓名"  size="small"></el-input></div>
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
            <el-button type="primary"  size="small">搜索</el-button>
        </div>
        <div class="reset">
            <el-button type="primary"  size="small">重置</el-button>
        </div>
      </form>
      
     <div class="table">
       <!-- table + pagination 我还是喜欢动态的切割数据，然后再过滤 -->
       <!-- 计算公式 data.slice((当前页-1)*每页显示的条数,当前页*每页显示的条数) -->
      <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage * pageSize).filter(data => !search || data.stuNum.includes(search))"
      style="width: 100%">
      <el-table-column
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="学号"
        prop="stuNum">
      </el-table-column>
           <el-table-column
        label="班级"
        prop="grade">
      </el-table-column>
           <el-table-column
        label="教室"
        prop="classRoom">
      </el-table-column>
      <el-table-column
        label="密码"
        prop="password">
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
      :total="tableData.length">
    </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            studentName:"",
            seleList:[
                {
                    options: [{
                        value: "选项1",
                        label: "黄金糕"
                    }, {
                        value: "选项2",
                        label: "双皮奶"
                    }, {
                        value: "选项3",
                        label: "蚵仔煎"
                    }, {
                        value: "选项4",
                        label: "龙须面"
                    }, {
                        value: "选项5",
                        label: "北京烤鸭"
                    }],
                    value: "",
                    placeholder:"请选择教室号"
                },
                {
                    options: [{
                        value: "选项1",
                        label: "黄金糕1"
                    }, {
                        value: "选项2",
                        label: "双皮奶2"
                    }, {
                        value: "选项3",
                        label: "蚵仔煎3"
                    }, {
                        value: "选项4",
                        label: "龙须面4"
                    }, {
                        value: "选项5",
                        label: "北京烤鸭5"
                    }],
                    value: "",
                    placeholder:"班级名"
                }
            ],
            tableData: [{
                stuNum: "20160502",
                name: "王小虎",
                grade: "1518",
                classRoom:"1706C",
                password:"1403170016"
            }, {
                stuNum: "20160504",
                name: "王小虎",
                grade: "1517",
                classRoom:"1707C",
                password:"1403170017"
            }, {
                stuNum: "20160501",
                name: "王小虎",
                grade: "1519",
                classRoom:"1708E",
                password:"1403170018"
            }, {
                stuNum: "20160503",
                name: "王小虎",
                grade: "1516",
                classRoom:"1709A",
                password:"1403170019"
            }, {
                stuNum: "20160502",
                name: "王小虎",
                grade: "1518",
                classRoom:"1706C",
                password:"1403170016"
            }, {
                stuNum: "20160504",
                name: "王小虎",
                grade: "1517",
                classRoom:"1707C",
                password:"1403170017"
            }, {
                stuNum: "20160501",
                name: "王小虎",
                grade: "1519",
                classRoom:"1708E",
                password:"1403170018"
            }, {
                stuNum: "20160503",
                name: "王小虎",
                grade: "1516",
                classRoom:"1709A",
                password:"1403170019"
            }, {
                stuNum: "20160502",
                name: "王小虎",
                grade: "1518",
                classRoom:"1706C",
                password:"1403170016"
            }, {
                stuNum: "20160504",
                name: "王小虎",
                grade: "1517",
                classRoom:"1707C",
                password:"1403170017"
            }, {
                stuNum: "20160501",
                name: "王小虎",
                grade: "1519",
                classRoom:"1708E",
                password:"1403170018"
            }, {
                stuNum: "20160503",
                name: "王小虎",
                grade: "1516",
                classRoom:"1709A",
                password:"1403170019"
            }],
            search: "",
            currentPage:1,
            pageSize:5
        }
    }, 
    methods: {
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            this.pageSize = val;
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
        }
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
