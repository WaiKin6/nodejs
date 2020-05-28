"use strict";
//面向对象编程 第4节 接口就是定义我们规范的东西
//小姐姐找老公的例子 ?可选参数
// interface Husband{
//     sex:string
//     interest:string
//     maiBaoBao?:Boolean
// }
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch("高、富、帅", "才"));
