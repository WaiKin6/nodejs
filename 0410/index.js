class Money {
        constructor(num) {
                return this.num = num;
        }
        add(c2) {
                //此处this,相当于实例化对象one
                return new Money(this + c2);
        }
        static add(c1, c2) {
                return new Money(c1 + c2);
        }
        //当实例化对象的时候，对象的参数含有“+”，并且进行加运算的时候调用，返回值 必须 是 数值类型
        valueOf() {
                return this.num;
        }
        //在字符串模板里，调用实例化对象时候默认调用，方法体可以自定义
        toString() {
                let sum = `${this.num}`;
                return `${sum[0]}元${sum[1]}角${sum[2]}分`
        }
}
//分别实例化两个对象
let one = new Money(106);
let two = new Money(65);
let three = Money.add(one, two);
let four = one.add(two);
let five = new Money(one + two);
console.log(`${three}`, `${four}`, `${five}`)



const obj = {
        i: 1,
        toString: function () {
          return obj.i++;
        }
      }
if (obj === 1 && obj === 2 && obj ===3){console.log(9)}
