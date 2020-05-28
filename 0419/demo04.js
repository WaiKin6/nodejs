"use strict";
// function searchXiaojiejie(age:number):string{
//     return "找到了"+age+"岁的小姐姐"
// }
// var age:number = 28;
// var result = searchXiaojiejie(age);
// console.log(result);
//函数定义 需要注意的是 必须是function关键字 参数多个逗号隔开 参数可有可无 函数名一致就不说了 函数的返回值类型如果是string的话那么接受的变量的值也就是string类型
//有可选参数的函数 加个？号就变成了一个可选的形参
// function searchXiaojiejie(age:number,stature?:string):string{
//     let yy:string = '';
//     yy = '找到了'+age+'岁';
//     if(stature!=undefined){
//         yy = yy + stature
//     }
//     return yy+"的小姐姐";
// }
// var age:number = 28;
// // var stature = "大波浪";
// var result:string = searchXiaojiejie(age,"大长腿");
// console.log(result);
//有默认参数的函数 
// function searchXiaojiejie(age:number=18,stature:string="水蛇腰"):string{
//     let yy:string = '';
//     yy = '找到了'+age+'岁';
//     if(stature!=undefined){
//         yy = yy + stature
//     }
//     return yy+"的小姐姐";
// }
// var age:number = 28;
// // var stature = "大波浪";
// var result:string = searchXiaojiejie(22,'大长腿');
// console.log(result);
//有剩余参数的函数
//需求不确定
function searchXiaojiejie() {
    var xuqui = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqui[_i] = arguments[_i];
    }
    var yy = '找到了';
    // for(let i =0;i<xuqui.length;i++){
    //     yy = yy + xuqui[i]
    //     if(i<xuqui.length-1){
    //         yy = yy +"、";
    //     }
    // }
    yy += xuqui.join("、") + "的小姐姐";
    return yy;
}
var age = 28;
// var stature = "大波浪";
var result = searchXiaojiejie('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result);
