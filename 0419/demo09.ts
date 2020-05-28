//不传递任何参数的声明方式
// let d:Date = new Date()
// console.log(d);

//传递一个整数的方式
// let d1:Date = new Date(1000);//1970-01-01 00:00:01
// let d2:Date = new Date(2000);//1970-01-01 00:00:02
// console.log(d1,d2);

//传递一个字符串的方式
let d3:Date = new Date("2018/09/07 05:35:00");
let d4:Date = new Date("2018-09-07 05:35:00");
let d5:Date = new Date("2018-09-07T05:35:00");
console.log(d3);
console.log(d4);
console.log(d5);


// //年月日 ???
// let d6:Date = new Date(year,month,day);
// console.log(d6);
