"use strict";
//数值类型
var age = 18; //支持整数也支持浮点数
var stature = 178.5;
//在number中有一个比较特殊的数值NaN 全称Not a Number
var sex = NaN;
console.log(age, stature, sex);
console.log("----------");
//字符串类型 单双引号都可以
var WaiKin = '韦健';
console.log(WaiKin);
console.log('-----------');
//boolean true false 它只有两种类型就是true和false
var b = true;
var c = false;
console.log(b, c);
console.log("--------");
//enum 类型 枚举类型 人：男人 女人 中性  四级 春夏秋冬
//大小写都可以使用
var REN;
(function (REN) {
    REN[REN["nan"] = 0] = "nan";
    REN[REN["nv"] = 1] = "nv";
    REN[REN["yao"] = 2] = "yao";
})(REN || (REN = {}));
console.log(REN.yao); //打印出来的是它的下标
var RENTYPE;
(function (RENTYPE) {
    RENTYPE["nan"] = "\u7537\u4EBA";
    RENTYPE["nv"] = "\u5973\u4EBA";
    RENTYPE["yao"] = "\u5996";
})(RENTYPE || (RENTYPE = {}));
console.log(RENTYPE.yao); //打印出来的是妖
console.log("----------");
//any 类型 万能类型
var t = 10;
t = "WaiKin";
t = true;
console.log(t);
console.log("----------");
//null 类型 它代表的是空白类型
