//面向对象编程 第4节 接口就是定义我们规范的东西
//小姐姐找老公的例子 ?可选参数
// interface Husband{
//     sex:string
//     interest:string
//     maiBaoBao?:Boolean
// }

// let myhusband:Husband = {sex:"男",interest:"看书、做家务",maiBaoBao:true}

// console.log(myhusband);


//比方式小姐姐有很多备胎 我们就做一个老公筛选器
interface SearchMan{
    //定义规范 
    (source:string,subString:string):boolean
}

let mySearch:SearchMan
mySearch=function(source:string,subString:string){
    let flag = source.search(subString)
    return (flag!=-1)
}
console.log(mySearch("高、富、帅","才"));

