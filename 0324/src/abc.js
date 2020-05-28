 class Abc {
  constructor() {
    this.event = {}
  }
  $emit(eventName, arg) {
    if (this.even[eventName]) {
      this.even[eventName].forEach(item => {
        item(arg)
      })
    }
  }
  $on(eventName, cbk) {
    if (!this.event[eventName]) {
      this.event[eventName] = [cbk]
    } else {
      this.event[eventName].push(cbk)
    }
  }
  // 判断事件名称是否存在。若不存在，直接返回return；若存在，判断callback是否存在，如果存在则删除对应下标的的函数，如果不存在则将当前数组清空。
  $off(eventName, cbk) {
    if (this.event[eventName]) {
      if (cbk) {
        let index = event[eventName].indexOf(cbk);
        this.event[eventName].splice(index, 1);
      } else {
        this.event[eventName].length = 0;
      }
    }
  }
  $once(eventName, cbk) {
    function oneTime() {
      //先执行回调，然后清除该事件的对应回调
      this.$off(eventName, cbk)
    }
    this.$on(eventName, oneTime);
  }
}

export default new Abc();
