<template>
  <div>
    子组件
    <!-- <slot></slot>
    <slot name="s1"></slot> -->
    <slot :data="arr"></slot>  
    <button @click="send">123</button>
  </div>
</template>

<script>
export default {
  props: ["sendList"],
  data(){
    return {
     arr:[1,2,3,4,5,6]
    }
  },
  methods: {
    send() {
      this.$emit("Data", [
        {
          name: "黄焖鸡米饭111111111",
          cList: [
            { name: "二级黄焖鸡" },
            {
              name: "one chicken",
              cList: [
                { name: "三级黄焖鸡3333", cList: [{ name: "四级黄焖鸡" }] }
              ]
            }
          ]
        },
        { name: "2222222222" },
        {
          name: "黄焖鸡米饭33333333",
          cList: [{ name: "二级黄焖鸡" }, { name: "one chicken" }]
        }
      ]);
    }
  }
};
</script>

<style scoped lang="scss">
ul {
    padding-left: 20px !important;
    >li {
        line-height: 30px;
        >span {
            display: inline-block;
            height: 100%;
        }
        >span.haveChildrenTop {
            width: 10px;
            height: 9px;
            -webkit-background-size: cover;
            background-size: cover;
        }
        >span.haveChildrenbottom {
            width: 10px;
            height: 9px;
            -webkit-background-size: cover;
            background-size: cover;
        }
        >span.textName {
            margin-left: 10px;
        }
        >span.chooseSpanNow {
            color: skyblue;
        }
    }
}
</style>