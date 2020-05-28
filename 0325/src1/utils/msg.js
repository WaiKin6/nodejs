export default {
  install(Vue) {
    let msg = function ({ content = {} }) {
      let Component = Vue.extend({
        template: `<div class="page-bar"> 
        <div class="content"  v-for="(item,ind) in arr.length?arr:data" v-show='(ind+1)===cur' :key="ind">{{item}}</div>
        <ul> 
          <li><a :class=" setButtonClass(0)" v-on:click="prvePage(cur)">上一页</a></li> 
          <li><select v-model="all"  @change="changeOption"><option v-for="(v,i) in changePage" :key="i">{{v}}</option></select></li>
          <li v-for="index in indexs"  v-bind:class="{ active: cur == index}"> 
             <a v-on:click="btnClick(index)">{{ index < 1 ? "..." : index }}</a> 
          </li> 
          <li><a :class=" setButtonClass(1)" v-on:click="nextPage(cur)">下一页</a></li> 
        </ul> 
      </div>`,
        data() {
          return{
            all:content.all,
            cur:content.cur,
            data:content.data,
            changePage:content.changePage,
            arr:[],
            newPageNum:1
          }
        },
        computed: {
            indexs: function () {
                var left = 1
                var right = this.all
                var ar = []
                if (this.all >= 11) {
                    if (this.cur > 5 && this.cur < this.all - 4) {
                        left = this.cur - 5
                        right = this.cur + 4
                    } else {
                        if (this.cur <= 5) {
                            left = 1
                            right = 10
                        } else {
                            right = this.all
                            left = this.all - 9
                        }
                    }
                }
                while (left <= right) {
                    ar.push(left)
                    left++
                }
                if (ar[0] > 1) {
                    ar[0] = 1;
                    ar[1] = -1;
                }
                if (ar[ar.length - 1] < this.all) {
                    ar[ar.length - 1] = this.all;
                    ar[ar.length - 2] = 0;
                }
                return ar
            }
        },
        methods: {
            // 页码点击事件
            btnClick: function (data) {
                if (data < 1) return;
                if (data != this.cur) {
                    this.cur = data
                }
            },
            // 下一页
            nextPage: function (data) {
                if (this.cur >= this.all) return;
                this.btnClick(this.cur + 1);
            },
            // 上一页
            prvePage: function (data) {
                if (this.cur <= 1) return;
                this.btnClick(this.cur - 1);
            },
            // 设置按钮禁用样式
            setButtonClass: function (isNextButton) {
                if (isNextButton) {
                    return this.cur >= this.all ? "page-button-disabled" : ""
                }
                else {
                    return this.cur <= 1 ? "page-button-disabled" : ""
                }
            },
            changeOption:function(e){
              this.arr = [];
              let pageNum = Number(e.target.value);
              let newData = JSON.parse(JSON.stringify(this.data));
              let newLimit= this.data.length/pageNum;
              for(let i =0;i<newData.length;i+=newLimit) {
                this.arr.push(newData.slice(i,newLimit+i));   
              }
              if(this.cur!==1){
                if (pageNum==this.data.length){
                  this.cur=Math.ceil(this.cur*this.newPageNum);
                  console.log("$"+newLimit);
                }else{
                  if(newLimit===5){//总页数为2
                    if(Math.floor(this.cur/2)>2){
                      this.cur=Math.floor(this.cur/newLimit);
                      return
                    }
                  this.cur=Math.floor(this.cur/2);
                  this.newPageNum = newLimit;
                  }else if(newLimit===2){//总页数为5
                  this.cur=Math.ceil(this.cur/2);
                  this.newPageNum = newLimit;
                  }
                  console.log("%"+newLimit);
              }
            }
              // if(this.cur!==1){
              //   if(pageNum==item){
              //     console.log(pageNum);
                  
              //     this.cur=Math.ceil(this.cur/newLimit);
              //     this.newPageNum = this.data.length/pageNum;
              //   }else if(pageNum==10){
              //     this.cur=Math.ceil(this.cur*this.newPageNum);
              //     console.log(this.cur,this.newPageNum);
              //   }
              // }
            }
        }
      })
      let res = new Component().$mount();
      document.getElementById("app").appendChild(res.$el)
    }
    Vue.prototype.$msg = msg;
  }
}









// export default {
//   install(Vue){
//     let msg = function({cont = "默认值"}){
//       let Com= Vue.extend({
//         data(){
//           return {
//            cont
//           }
//         },
//         template:"<div>{{cont}}</div>"
//       })
//       let res= new Com().$mount();
//       let app = document.getElementById("app");
//       app.appendChild(res.$el)
//     }
//     Vue.prototype.$msg = msg;
//   }
// }

