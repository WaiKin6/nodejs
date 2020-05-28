// 1-3、手动封装call，applay和bind，

//实现call()
function func() {
    console.log(this.value)
}
var obj = {
    value: 233
}
Function.prototype.mycall = function(obj) {
 
    obj.fn = this; //这里的this就是调用mycall的func函数
    obj.fn();
    delete obj.fn;
}
func.mycall(obj); //233

//实现apply()
Function.prototype.myapply = function(obj,arr){
    obj.fn = this;
     if(!arr){
         obj.fn();
    }else{
         var args = []; 
   for(var i = 0; i < arr.length; i++) {
         args.push('arr[' + i + ']');
     }
     eval('obj.fn('+args+')');
}
     delete  obj.fn;
}

//实现bind()
Function.prototype.testBind = function(object){
 
    var that = this,
        args = Array.prototype.slice.call(arguments,1),
        bound = function(){
              return that.apply(this instanceof fNOP?this:object||window,
                   args.concat.apply(Array.from(arguments)));
    };

  //创建一个中转函数fNOP，让bound间接继承目标函数的原型
    var fNOP =  function(){};
    fNOP.prototype= that.prototype;   
    bound.prototype= new fNOP();  

    return bound;
}



// 4、封装一个promise和。then，resolve和reject
//封装promise 方法
// promise 构造函数
function promise (fn) {
    let that = this
    that.status = 'pending' // 存储promise的state
    that.value = '' // 存储promise的value
    that.reason = '' // 存储promise的reason
    that.onFulfilledCb = [] // 存储then方法中注册的回调函数（第一个参数）
    that.onRejectedCb = [] // 存储then方法中注册的回调函数（第二个参数）
  
    // 2.1
    function resolve (value) {
      // 将promise的状态从pending更改为fulfilled，并且以value为参数依次调用then方法中注册的回调
      setTimeout (() => {
        if (that.status === 'pending') {
          that.status = 'fulfilled'
          that.value = value
          // 2.2.2、2.2.6
          that.onFulfilledCb.map( item => {
            item(that.value)
          })
        }
      }, 0)
    }
  
    function reject (reason) {
      // 将promise的状态从pending更改为rejected，并且以reason为参数依次调用then方法中注册的回调
      setTimeout(() => {
        if (that.status === 'pending') {
          that.status = 'rejected'
          that.reason = reason
          // 2.2.3、2.2.6
          that.onRejectedCb.map( item => {
            item(that.reason)
          })
        }
      }, 0)
    }
  
    fn(resolve, reject)
  }
 


// 5、Person().eat("吃").sleep(2000).eat("再吃").sleepFirst(3000)
// 构造函数.满足一个连缀调发
// 输出
let index = 0;
let stack = [];

function next() {
    let fn = stack[index];
    index++;
    if (typeof fn === 'function') {
        fn();
    }
}

function Man(name) {
    stack.push(function () {
        next();
    })
}
var Person = function (name) {
    return new Man(name)
}
Man.prototype.sleep = function (time) {
    stack.push(function () {
        setTimeout(function () {
            next()
        }, time * 1000)
    })
    return this;
}
Man.prototype.eat = function (food) {
    stack.push(function () {
        console.log(food)
        next();
    })
    return this;
}
Man.prototype.sleepFirst = function (time) {
    stack.unshift(function () {
        setTimeout(function () {
            next()
        }, time * 1000)
    })
    return this;
}
// Person('Li')
/* 输出:
Hi! This is Hank!
*/
// Person('Dan').sleep(3).eat('dinner')
/* 输出:
Hi! This is Hank!
// 等待10秒..
Wake up after 10
Eat dinner~
*/
// Person('Jerry').eat('dinner~').eat('supper~')
/* 输出:
Hi This is Hank!
Eat dinner~
Eat supper~
*/
// Person('Smith').sleepFirst(3).eat('supper')
Person().eat("吃").sleep(2).eat("再吃").sleepFirst(3)
/* 等待5秒，输出
Wake up after 5
Hi This is Hank!
Eat supper
*/
next()




// 6、青蛙跳 10个台阶，每次只能条一个或两个
function gua(res = [], count = 0) {
    let i = 1;
    while (i < 3) {
        if (count + i <= 10) {
            let _res = [...res];
            _res.push(i);
            if (count + i === 10) {
                 console.log(_res);
            } else {
                gua(_res, count + i)
            }
        }
        i++
    }
}
gua()
