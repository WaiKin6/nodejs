<template>
  <div id="app">
    <button @click="six">666</button>
    <Home ref="child" :sendList="list" >
<!--       
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div slot="s1">1</div> -->
      <template slot-scope="obj">
      <span v-for="v in obj.data" :key="v">{{v}}</span>
      </template>
    </Home>
    <tree :treelist="list"></tree>
    </div>
</template>
<script>
import Home from "@/components/Home.vue";
import tree from "@/components/tree.vue";
import Keep from "@/components/keep.vue";
import Live from "@/components/live.vue";
export default {
  name:'App', 
  components: { Home,tree,Keep,Live },
  data() {
    return {
     list:[
         {
             name:"name1",
             children:[
                 {
                     name:"name1-1",
                     children:[
                         {
                             name:"name1-1-1"
                         }
                     ]
                    
                 }
             ]
         },
            {
             name:"name2",
             children:[
                 {
                     name:"name2-2",
                     children:[
                         {
                             name:"name2-2-2"
                         }
                     ]
                    
                 }
             ]
         }
     ]
    };
  },
  methods:{
    six(){
    this.$msg({
      content:{ 
                // 当前页码
                cur: 1,
                // 总页数
                all: 10,
                //每页内容展示的1条数据 第1页展示第1条 第10页展示第10条 
                data:["第1条","第2条","第3条","第4条","第5条","第6条","第7条","第8条","第9条","第10条"],
                //调整每页显示条数
                changePage:[2,5,10]
            }
      })
    }
  },
  mounted() {
    this.$refs.child.$on("Data", abc => {
      console.log(abc);
    });
    this.$refs.child.$once("sendData", () => {
      console.log("该方法只触发一次");
    });
    //解绑事件
    this.$refs.child.$off(["sendData", "data"]);
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
ul, li {
    margin: 0px;
    padding: 0px;
}

.page-bar {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.page-button-disabled {
    color:#ddd !important;
}
ul{
  display: flex;
}
.page-bar li {
    list-style: none;
    display: inline-block;
}

.page-bar li:first-child > a {
    margin-left: 0px;
}

.page-bar a {
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer;
}

.page-bar a:hover {
    background-color: #eee;
}

.page-bar .active a {
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}

.page-bar i {
    font-style: normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
}
select{
  display: inline-block;
  padding: 8.5px;
  height: 36px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
}
</style>
