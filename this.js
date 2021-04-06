// 全局执行上下文的this
// console.log(this)

// 函数中的this
// 未指定的情况下，浏览器中与全局this一致
// function foo () {
//   console.log(this)
// }
// foo()

// 调用call方法指定this
let bar = {
  myName : "bar", 
  test1 : 1
}
function foo(){
  this.myName = "foo" 
}
foo.call(bar)
// foo.bind(bar)
// foo.apply(bar)
console.log(bar)
console.log(bar.myName)
// foo()
console.log(myName)
