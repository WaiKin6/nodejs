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
    //on函数的fn属性添加一个标记，cb，方便循环off清除(提供了事件与回调的时候)
    this.$on(eventName, oneTime);
  }
}

 new Abc();
