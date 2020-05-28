<template>
  <div id="app">
    <Home ref="child" :sendList="list" />
    <tree :treelist="list"></tree>
  </div>
</template>
<script>
import Home from "@/components/Home.vue";
import tree from "@/components/tree.vue";
export default {
  name:'App', 
  components: { Home,tree },
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
</style>
