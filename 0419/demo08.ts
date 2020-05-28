//引用类型的字符串 
//先得明确啊 什么是基本类型的字符串 什么是引用类型的字符串
//基本类型的字符串就是用单引号或者双引号括起来的字符串 
//引用类型就是用new 实例而来的字符串

let WaiKin6:string = 'Kin';
let WaiKin9:String = new String("waikin6.com");
console.log(WaiKin6.length,WaiKin9.length);


//查找字符串
//基本方法 indexOf
let something:string = '清晨起来打开窗，心情美美的，我要出去找小姐姐';
let xiaojiejie:string = '小姐姐';

//打印出小姐姐匹配开始的索引位置
console.log(something.indexOf(xiaojiejie));
//打印出小姐姐匹配最后的索引位置
console.log(something.lastIndexOf("Kin"));

//字符串截取
console.log(something.substring(8,14));


