var data = []
// 循环中用关键字let代替var
for (let i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i)
  }
}

data[0]()
data[1]()
data[2]()