// 全局执行上下文的this
// console.log(this)

// 函数中的this
// 未指定的情况下，浏览器中与全局this一致
// function foo () {
//   console.log(this)
// }
// foo()

// 调用call方法指定this
// let bar = {
//   myName : "bar", 
//   test1 : 1
// }
// function foo(){
//   this.myName = "foo" 
// }
// foo.call(bar)
// // foo.bind(bar)
// // foo.apply(bar)
// console.log(bar)
// console.log(bar.myName)
// // foo()
// console.log(myName)

// 调用对象的方法
// 使用对象来调用其内部的一个方法，该方法的this是指向对象本身的
// 在全局环境中调用一个函数，函数内部的this指向的是全局变量window
// 通过一个对象来调用其内部的一个方法，该方法的执行上下文中的this指向对象本身
// let myObj = {
//   name: "grace",
//   showThis () { // 此处若用箭头函数，其this指向为全局
//     console.log(this)
//   }
// }
// myObj.showThis() // this指向myObj
// const foo = myObj.showThis
// foo() // this指向全局

// 构造函数
function CreateObj (name) {
  this.name = name
}
let objA = new CreateObj('grace')
let objB = new CreateObj('jack')
console.log(objA)
console.log(objB)

// this缺陷：this的继承不符合直觉
// 解决：1）用一个值存放this, 转化为作用域体系的处理 2）使用箭头函数，箭头函数不会创建自身的执行上下文
