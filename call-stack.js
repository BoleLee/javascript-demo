var a = 2
function add(b,c) {
  console.trace()
  return b+c 
}
function addAll(b,c) {
  var d = 10
  result = add(b,c)
  console.log(result)
  return  a+result+d
}
console.log(addAll(3,6))