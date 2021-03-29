// v1
// function Bromise (executor) {
//   let onResolve_ = null
//   let onReject_ = null

//   // 调用then时定义resolve, reject
//   this.then = function (onResolve, onReject) {
//     onResolve_ = onResolve
//     onReject_ = onReject
//   }

//   // 执行回调函数
//   function resolve (res) {
//     // 延时执行，需改造为微任务
//     setTimeout(() => {
//       onResolve_(res)
//     }, 0)
//   }

//   function reject () {}

//   executor(resolve, reject)
// }

// v2
class Bromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor (executor) {
    this.status = Bromise.PENDING
    this.value = undefined // 存储this._resolve返回的值
    this.reason = undefined // 存储this._reject返回的值
    this.callbacks = [] // 存储then传入的回调函数
    executor(this._resolve.bind(this), this._reject.bind(this))
  }

  _resolve (value) {
    this.value = value
    this.status = Bromise.FULFILLED

    this.callbacks.forEach(cb => this._handler(cb))
  }
  _reject (reason) {
    this.reason = reason
    this.status = Bromise.REJECTED

    this.callbacks.forEach(cb => this._handler(cb))
  }

  // 执行回调
  _handler (callback) {
    const { onResolve, onReject } = callback

    if (this.status === Bromise.FULFILLED && onResolve) {
      onResolve(this.value)
    }

    if (this.status === Bromise.REJECTED && onReject) {
      onReject(this.reason)
    }
  }

  // 在resolve/reject执行之后执行
  // 注册事件
  then (onResolve, onReject) {
    this.callbacks.push({
      onResolve,
      onReject
    })
  }
}


// demo
function executor(resolve, reject) {
  // 延时执行，否则可能执行时该函数未注册
  setTimeout(() => {
    resolve('grace')
  }, 0)
}
let demo = new Bromise(executor)
function onResolve(value){
  console.log(value)
}
demo.then(onResolve)