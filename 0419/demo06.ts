//变量的作用域 以函数划分 
//什么是全局遍历 什么是局部变量

//局部变量
// function zhengxing():void{
//     var yangzi:string = "刘德华"
//     console.log(yangzi);
// }
// zhengxing()

//不在域内报错
// console.log(yangzi);
//console.log("------");

//变量声明提升 当内部变量与全局变量重名时它会取内部作用域会取内部变量  全局作用域会取全局变量

// var yangzi:string = "刘德华"
// function zhengxing():void{
//     console.log("Kin整形成了"+yangzi+"的样子");
//     var yangzi:string = "马德华";
//     console.log("Kin整形成了"+yangzi+"的样子");
// }
// zhengxing()

// console.log(yangzi);

//使用let关键字可解决变量声明提升的问题
// function zhengxing():void{
//     var yangzia:string = "刘德华";
//     {
//         //在编译时他会转换成var
//         let yangzib:string = "小沈阳";
//         console.log("Kin整形成了"+yangzib+"的样子");
//     }
//     console.log("Kin整形成了"+yangzia+"的样子");
//     console.log("Kin整形成了"+yangzib+"的样子");
// }
// zhengxing()

//全局变量
// var yangzi:string = "刘德华";
// function zhengxing():void{
//     console.log(yangzi);
// }
// zhengxing()

// console.log(yangzi);