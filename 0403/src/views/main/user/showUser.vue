<template>
  <div class="showUser">
    <h2>用户展示</h2>
    <div class="cont-out">
      <div class="radio-group">
        <el-button :class="i===curIndex?'cls':''" @click="changeTab(v, i)" v-for="(v, i) in btnList" :key="i">{{v}}</el-button>
        <h3>{{btnList[curIndex]}}</h3>
       </div>  
        <div class="table" v-show="curIndex === 0">
           <el-table
    :data="tableData.slice((currentPage-1)*pageSize,currentPage * pageSize)"
    style="width: 100%">
    <el-table-column
      label="用户名"
      prop="date">
    </el-table-column>
    <el-table-column
      label="密码"
      prop="name">
    </el-table-column>
    <el-table-column
      align="center"
      label="身份"
      prop="address">
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
      :total="tableData.length">
    </el-pagination>
    </div>
        </div>
          
        <div class="table" v-show="curIndex === 1">
           <el-table
    :data="curArr1.slice((currentPage-1)*pageSize,currentPage * pageSize)"
    style="width: 100%">
    <el-table-column
      id="id"
      align="left"
      label="身份"
      prop="address">
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
      :total="curArr1.length">
    </el-pagination>
    </div>
        </div>
           <div class="table" v-show="curIndex === 2">
           <el-table
    :data="curArr2.slice((currentPage-1)*pageSize,currentPage * pageSize)"
    style="width: 100%">
    <el-table-column
      label="api权限名称"
      prop="date">
    </el-table-column>
    <el-table-column
      label="api权限url"
      prop="name">
    </el-table-column>
    <el-table-column
      align="center"
      label="api权限方法"
      prop="address">
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
      :total="curArr2.length">
    </el-pagination>
    </div>
        </div>
        <div class="table" v-show="curIndex === 3">
           <el-table
    :data="curArr3.slice((currentPage-1)*pageSize,currentPage * pageSize)"
    style="width: 100%">
    <el-table-column
      label="身份名称"
      prop="date">
    </el-table-column>
    <el-table-column
      label="api权限名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="api权限url"
      prop="url">
    </el-table-column>
    <el-table-column
      align="center"
      label="api权限方法"
      prop="address">
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
      :total="curArr3.length">
    </el-pagination>
    </div>
        </div>
        <div class="table" v-show="curIndex === 4">
           <el-table
    :data="curArr4.slice((currentPage-1)*pageSize,currentPage * pageSize)"
    style="width: 100%">
    <el-table-column
      label="视图权限名称"
      prop="name">
    </el-table-column>
    <el-table-column
      align="center"
      label="视图id"
      prop="address">
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
      :total="curArr4.length">
    </el-pagination>
    </div>
        </div>
        <div class="table" v-show="curIndex === 5">
           <el-table
    :data="curArr5.slice((currentPage-1)*pageSize,currentPage * pageSize)"
    style="width: 100%">
    <el-table-column
      label="身份"
      prop="data">
    </el-table-column>
    <el-table-column
      label="视图名称"
      prop="name">
    </el-table-column>
    <el-table-column
      align="center"
      label="视图id"
      prop="address">
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
      :total="curArr5.length">
    </el-pagination>
    </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            btnList:["用户数据", "身份数据", "api接口权限", "身份和api接口关系", "视图接口权限", "身份和视图权限关系"],
            curIndex:0,
            tableData: [],
            search: "",
            userList:[],
            fliterUserList:[],
            curArr1:[],
            curArr2:[],
            curArr3:[],
            curArr4:[],
            curArr5:[],
            currentPage:1,
            pageSize:5,
        }
    },
    methods:{
        changeTab(v, i){
            this.curIndex = i;
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
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
        },
    },
    async created(){
        await this.$getUserList().then(res=>this.userList = res.data.data);
        //用户数据
        this.userList.forEach(item =>{
            this.tableData.push({
                date: item.user_name,
                name: item.user_pwd,
                address: item.identity_text
            })
        })
        //身份数据
        let arr = await this.$getIdentity();
        
        arr.data.data.forEach(item =>{
            this.curArr1.push({
                address: item.identity_text,
                id: item.identity_id,
            })
        })
        
        //api接口权限数据
        // eslint-disable-next-line no-unused-vars
        let apiInterfaceArr = [];
        await this.$getApiInterfaceList().then(res=> apiInterfaceArr = res.data.data);
       
        apiInterfaceArr.forEach(item =>{
            this.curArr2.push({
                date: item.api_authority_text,
                name: item.api_authority_url,
                address: item.api_authority_method
            })
        })
        //展示身份和api权限关系数据
        // eslint-disable-next-line no-unused-vars
        let relationshipArr = [];
        await this.$getRelationshipList().then(res=> relationshipArr = res.data.data);
       
        relationshipArr.forEach(item =>{
            this.curArr3.push({
                date: item.identity_text,
                name: item.api_authority_text,
                url: item.api_authority_url,
                address: item.api_authority_method
            })
        })

        //获取视图权限数据
        // eslint-disable-next-line no-unused-vars
        let viewAauthorityArr = [];
        await this.$getviewAauthorityList().then(res=> viewAauthorityArr = res.data.data);
       
        viewAauthorityArr.forEach(item =>{
            this.curArr4.push({
                name: item.view_authority_text,
                address: item.view_id
            })
        })

        //获取展示身份和视图权限关系的数据
        // eslint-disable-next-line no-unused-vars
        let vaRelationArr = [];
        await this.$getvaRelationList().then(res=> vaRelationArr = res.data.data);
       
        vaRelationArr.forEach(item =>{
            this.curArr5.push({
                data: item.identity_text,
                name: item.view_authority_text,
                address: item.view_id
            })
        })
        
    }
}
</script>

<style lang="scss" scoped>
.showUser {
  width: 100%;
  height: 100%;
  min-width: 960px;
  h2 {
    padding: 30px 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  .cont-out {
    width: 100%;
    box-sizing: border-box;
    margin: 10px 24px 24px 24px;
    display: flex;
    flex-direction: column;
  .radio-group {
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
    line-height: unset;
    width: 100%;
    min-width: 1020px;
    h3 {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    padding: 10px;
      }
    }
  }
   .table{
    margin-right: 60px;
  }
  .cls{
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
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
