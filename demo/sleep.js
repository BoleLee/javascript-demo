function sleep (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
// Simple Demo
// async function ouput ()  {
//   const out = await sleep(1000)
//   console.log(1)
//   return out
// }
// ouput()

// Demo 红-黄-绿灯交替展示
function showLight (color) {
  console.log(`${color} light is on`)
}
async function lightSwitch (color) {
  showLight(color)
  const out = await sleep(1000)
  // 递归调用
  switch (color) {
    case 'red':
      lightSwitch('yellow'); break
    case 'yellow':
      lightSwitch('green'); break
    case 'green':
      lightSwitch('red'); break
  }
  return out
}
lightSwitch('red')

// TODO 设置递归终止条件，防止栈溢出
