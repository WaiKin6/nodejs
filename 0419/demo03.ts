//数值类型
var age:number = 18;//支持整数也支持浮点数
var stature:number = 178.5;

//在number中有一个比较特殊的数值NaN 全称Not a Number
var sex:number = NaN;
console.log(age,stature,sex);
console.log("----------");

//字符串类型 单双引号都可以
var WaiKin:string = '韦健';
console.log(WaiKin);
console.log('-----------');

//boolean true false 它只有两种类型就是true和false
var b:boolean = true;
var c:boolean = false;

console.log(b,c);
console.log("--------");



//enum 类型 枚举类型 人：男人 女人 中性  四级 春夏秋冬
//大小写都可以使用
enum REN{nan,nv,yao}
console.log(REN.yao);//打印出来的是它的下标

enum RENTYPE{nan='男人',nv='女人',yao='妖'}
console.log(RENTYPE.yao);//打印出来的是妖
console.log("----------");


//any 类型 万能类型
var t:any = 10;
t="WaiKin";
t=true;

console.log(t);
console.log("----------");


//null 类型 它代表的是空白类型





