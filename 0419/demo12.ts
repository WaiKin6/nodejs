// //面向对象第二节 修饰符
// //public 公有的修饰符
// //protected 受保护的修饰符
// //private 私有的修饰符
// //readonly 只读 不能修改


// class XiaoJieJie{
//     public sex:string;
//     protected name:string;
//     private age:number
//     public constructor(sex:string,name:string,age:number){
//         this.sex = sex;
//         this.name = name;
//         this.age = age;
//     }
//     public sayHello(){
//         console.log("小哥哥好");
//     }
//     protected sayLove(){
//         console.log("我爱你");
//     }
// }
// var JieJie:XiaoJieJie = new  XiaoJieJie ("女","热巴",18);

// console.log(JieJie);
// console.log(JieJie.sex);
// console.log(JieJie.name);
// console.log(JieJie.age);
// console.log(JieJie.sayHello);
// console.log(JieJie.sayLove);


// //只读属性的修饰符
// class Man{
//     public readonly sex:string = "男" 
// }
// var man:Man = new Man()

// man.sex = '女'
