//Watcher数据一变 通知观察者依次更新
class Dep{
    constructor(){
        this.subs = [];//存放所有的watcher
    }
    //订阅
    addSub(watcher){//添加 watcher
        this.subs.push(watcher);
    }
    //发布
    notify(){
        this.subs.forEach(watcher=>watcher.update());
    }
}

//观察者模式(包含发布订阅) 观察者观察被观察者
class Watcher {// 需求 数据一变,模板重新编译
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        //默认先存放一个老值 用于新值和老值做比对 
        this.oldValue = this.get();
    }
    get(){//vm.$data.school vm.$data.school.name
        Dep.target = this;//先把自己放到this上
        //取值 把这个数据关联起来
        let value = CompileUtil.getVal(this.vm,this.expr);
        Dep.target = null;//不取消 任何值取值 都会添加watcher
        return value;
    }
    update(){// 更新操作 数据变化后 会调用观察者的update方法
        let newVal =  CompileUtil.getVal(this.vm,this.expr);
        if(newVal !== this.oldValue){
            this.cb(newVal);
        }
    }
}
// vm.$watch(vm, "school.name", (newVal) => {

// })


class Observer {//实现数据劫持功能
    constructor(data) {
        this.observer(data)
    }
    observer(data) {
        //如果是对象才观察
        if (data && typeof data === "object") {
            for (let key in data) {
                this.defineReactive(data, key, data[key]);
            }
        }
    }
    defineReactive(obj, key, value) {
        this.observer(value);//school :[watcher,watcher] b:[watcher] 
        let dep = new Dep();//给每一个属性 都加上一个具有发布和订阅的功能
        Object.defineProperty(obj, key, { //到这只是监听了第一层 使用this.observer(value)进行递归调用
            get() {
                //创建watcher时 会取到对应的内容 并且把watcher放到了全局上
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set: (newVal) => {//school:{name:"kin"} school= {}
                if (newVal != value) { //当新值不等于老值时进行替换
                    //但是明确啊 这里的this是拿不到的 所以set方法采用箭头函数的形式
                    this.observer(newVal);//给新值进行数据劫持
                    value = newVal;
                    dep.notify();//实现数据驱动视图更新
                }
            }
        })
    }
}


class Compiler {
    constructor(el, vm) {
        //判断el属性是不是元素 如果是直接获取 如果不是 那就用querySelector获取他
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        //把当前节点中的元素放到内存中

        this.vm = vm;
        let fragment = this.node2fragment(this.el);

        //编译模板 用数据编译
        this.compile(fragment);
        //先把节点中的内容进行替换 然后再把内容塞回到页面中 
        this.el.appendChild(fragment);
    }

    isDirective(attrName) {//判断是不是一个指令
        return attrName.startsWith("v-");
    }

    //编译元素的
    compileElement(node) {
        let attributes = node.attributes;//类数组
        //类数组转数组
        [...attributes].forEach(attr => {
            let { name, value: expr } = attr;
            if (this.isDirective(name)) {// v-html v-modle v-bind 
                //判断是不是指令
                let [, directive] = name.split("-");//v-on:click
                let [directiveName,eventName] = directive.split(":");
                //需要调用不同的指令来处理 把expr放到输入框中处理
                CompileUtil[directiveName](node, expr, this.vm,eventName);
            }
        })
    }
    //编译文本的 
    compileText(node) {
        //判断当前文本节点中内容是否包含{{}}
        let content = node.textContent;
        //.匹配除换行符之外的任何字符 +一次或多次 ?零次或一次 
        //.+? 实现的是指明一个非贪婪限定 匹配到的是 {{xxx}}
        if (/\{\{(.+?)\}\}/.test(content)) {
            console.log(content,"text");//找到所有文本
            //文本节点
            CompileUtil["text"](node, content, this.vm);//{{a}} {{b}}
        }
    }

    //核心的编译方法 
    compile(node) {//用来编译内存中的dom节点
        let chilNodes = node.childNodes;//只包含dom节点的第一层 不包含li 
        //类数组转数组
        [...chilNodes].forEach(child => {
            if (this.isElementNode(child)) {
                this.compileElement(child);
                //如果是元素的话 需要把自己传进去 再去遍历子节点
                this.compile(child)
            } else {
                this.compileText(child);
            }
        })
    }
    node2fragment(node) {
        //创建文档碎片
        let fragment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = node.firstChild) {
            //appendChild具有移动性
            fragment.appendChild(firstChild);
        }
        return fragment;
    }
    isElementNode(node) {//是不是元素节点
        return node.nodeType === 1;
    }
}

//根据不同的功能调用里面不同的编译处理方式
CompileUtil = {
    //根据表达式取到相应的数据
    getVal(vm, expr) {//vm.$data 'school.name' [school,name]
        return expr.split(".").reduce((data, current) => {
            return data[current];
        }, vm.$data)
    },
    setValue(vm,expr,value){//vm.$data "school.name" = WaiKin
       expr.split(".").reduce((data,current,index,arr)=>{
            if(index == arr.length-1){
              return  data[current] =value;
            }
            return data[current];
        },vm.$data)
    },
    //解析v-modle的这个属性
    model(node, expr, vm) {
        //node是节点 expr 是表达式 即value值="school.name" vm 是当前实例
        //给输入框赋予value属性 node.value = xxx
        let fn = this.updater["modelUpdater"];
        new Watcher(vm,expr,(newVal)=>{//给输入框加一个观察者 如果稍后数据更新了会触发此方法， 会拿到新值 给输入框赋予值
            fn(node, newVal);
        })
        node.addEventListener("input",(e)=>{
            let value = e.target.value;//获取用户输入的值
            this.setValue(vm,expr,value);
        })
        let value = this.getVal(vm, expr);
        fn(node, value);
    },
    html(node,expr,vm) { //v-html="message" expr = "message"
        //node.innerHTML=xxx
        let fn = this.updater["htmlUpdater"];
        new Watcher(vm,expr,(newVal)=>{
            fn(node, newVal);
        })
        let value = this.getVal(vm, expr);
        fn(node, value);
    },
    getContentValue(vm,expr){
        //getVal遍历表达式 将内容重新替换成一个完整的内容 返还回去
        return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getVal(vm, args[1]);
        })
    },
    on(node,expr,vm,eventName){//v-on:click="change" expr = "change" 
        node.addEventListener(eventName,(e)=>{
           vm[expr].call(vm,e);//this.change
        })
    },
    text(node, expr, vm) { //{{school.name}} {{getNewName}} => school.name getNewName
        //最终的文本结果
        let fn = this.updater["textUpdater"]
        //这个方法实现的效果是 获取到 {{文本}} 里面的文本
        console.log(expr);
        let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            //给表达式中每个{{}}   都加上观察者 
            console.log(...args);//第一个是元字符串 第二个是正则匹配捕获的内容 第三个参数是捕获的下标
            
            new Watcher(vm,args[1],()=>{
                fn(node,this.getContentValue(vm,expr));//返回一个全新的字符串
            })
            return this.getVal(vm, args[1]);
        });
        fn(node, content);
    },
    updater: {
        //把数据插到节点中
        modelUpdater(node, value) {
            node.value = value;
        },
        htmlUpdater(node,value) {
            node.innerHTML = value;
        },
        //处理文本节点
        textUpdater(node, value) {//xss 攻击
            node.textContent = value;
        }
    }
}

class MyVue {//基类 主要的功能是接收参数负责调度 
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        let computed = options.computed;
        let methods = options.methods;
        //这个根元素存在 编译模板
        if (this.$el) {

            //把$data 全部转换成Object.defineProperty 来定义
            new Observer(this.$data);
            
            //{{getNewName}} reduce vm.$data.getNewName
            for(let key in computed){//有依赖关系 如果
                Object.defineProperty(this.$data,key,{
                    get:()=>{
                        return computed[key].call(this);
                    }
                })
            }

            for(let key in methods){
                Object.defineProperty(this,key,{
                    get(){
                        return methods[key];
                    }
                })
            }

            //把数据获取操作 vm上的取值操作 都代理到 vm.$data
            this.proxyVm(this.$data);

            new Compiler(this.$el, this);
        }
    }
    proxyVm(data){
        for(let key in data){//{school:name,age}
            Object.defineProperty(this,key,{//实现可以通过vm取到对应的内容
                get(){
                    return data[key];//进行了转化操作
                },
                set(newVal){//设置代理方法
                    data[key] = newVal;
                }
            });
        }
    }
}