// 作用域链
// function bar() {
//   console.log(myName)
// }
// function foo() {
//   var myName = "foo"
//   bar() 
// }
// var myName = "anonymous"
// foo()

// 闭包
// function foo() {
//   var myName = "myName:foo" 
//   let test1 = 1
//   const test2 = 2
//   var innerBar = {
//     getName: function() {
//       console.log(test1) 
//       return myName
//     }, 
//     setName: function(newName) {
//       myName = newName
//     }
//   }
//   return innerBar
// }
// var bar = foo() 
// bar.setName("global call setName") 
// bar.getName() 
// console.log(bar.getName())

// 是否产生闭包
var bar = {
  myName:"time.geekbang.com",
  printName: function () {
    console.log(myName)
    console.log(this.myName)
  }
}
function foo() {
  let myName = "极客时间"
  return bar.printName 
}
let myName = "极客邦" 
let _printName = foo() 
_printName() 
bar.printName()

console.log(this)