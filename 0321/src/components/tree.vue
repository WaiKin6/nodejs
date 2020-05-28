<template>
  <div>
    <div class="item" v-for="(item,index) in treelist" :key="index">
      <div class="item-title border-bottom" @click="isshow">{{item.name}}</div>
      <div v-show="open"  v-if="item.children" class="item-children">
        <tree :treelist="item.children"></tree>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tree",
  props: ["treelist"],
  data() {
    return {
      open:false,
    };
  },
  methods: {
    isshow() {
      this.open=!this.open;
    }
  }
};
</script>
<style lang="less">
</style>
