"use strict";
// let WaiKin = {
//     name:"Kin",
//     website:"waikin6.com"
//     age:18,
//     saySomething:function(){
//         console.log("为了前端技术");
//     }
// }
// console.log(WaiKin.name);
// WaiKin.saySomething()
//引用类型Array String Date RegExp
//那我们先来看一下数组吧
//数组的两种声明方式
//1.相当于 let arr1=[];这个数组的类型是number类型
var arr1;
//2.相当于let arr2 = new Array();这个数组的类型是string
var arr2;
//当然还有boolean类型...
var arr3;
//赋值的方式有两种 
//1.字面量赋值法
var arr4 = [];
var arr5 = [1, 2, 3, 4, 5];
var arr6 = ['Kin', 'king', 'ken'];
var arr7 = [true, false, false];
//2.构造函数赋值法
var arr8 = new Array();
var arr9 = new Array(1, 2, 3, 4, 5);
var arr10 = new Array('Kin', 'king', 'ken');
var arr11 = new Array(true, false, false);
//注意 如果数组的类型已经明确 那么数组的值就不能夹杂这好几种类型 除元组类型外
//元组类型 在实际开发中很少用 因为TypeScript正是要从弱类型语言转换成强类型语言 如果都是使用强类型语言那就没多大意义了
//声明方式
var x;
//正确的赋值方式
x = ["hello", 10];
//错误的赋值方式
//x=[10,'hello']
//犀牛 js红宝书第三版 深入理解ES6
