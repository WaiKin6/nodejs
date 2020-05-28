//RegExp 跟string非常相似


// //构造函数声明法
// let reg1:RegExp = new RegExp("WaiKin");
// console.log(reg1);
// //g代表的是全局修饰符 i代表的是忽视大小写 m多行匹配模式
// let reg2:RegExp = new RegExp("WaiKin","gi");
// console.log(reg2);


// //字面量声明法
// let reg3:RegExp = /WaiKin/;
// let reg4:RegExp = /WaiKin/gi;

// console.log(reg3,reg4);

//正则表达式最常用的方法 test() exec(string);

let reg5:RegExp = /WaiKin/i;
let website:string = "WaiKin.com"
// let result1:boolean = reg5.test(website);
// console.log(result1);

//exec它返回的是一个数组['标的',下标,'需要被检查的项']
console.log(reg5.exec(website));