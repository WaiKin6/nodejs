"use strict";
//ts面向对象第三节 继承
// class Kin{
//     public name :string
//     public age : number
//     public skill : string
//     constructor(name:string,age:number,skill:string){
//         this.name = name
//         this.age = age
//         this.skill = skill
//     }
//     public interest(){
//         console.log("找小姐姐");
//     }
// }
// let WaiKinObj:Kin = new Kin("Kin",18,'coding');
// // console.log(WaiKinObj);
// // WaiKinObj.interest()
// class King extends Kin{
//     public xingxiang:string = "天生帅气";
//     //重写 兴趣 子类会继承父类的兴趣 和重写自己的兴趣
//     //重写不是覆盖 而是追加式写入
//     public interest(){
//         super.interest()
//         console.log("建立电商平台");
//     }
//     public zhuanqian(){
//         console.log('一天赚一个亿');
//     }
// }
// let shuaiKing = new King("帅健",3,"演讲")
// shuaiKing.interest()//找小姐姐 建立电商平台
// shuaiKing.zhuanqian()
