module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false
  let stack = [str[0]];
  for (i = 1; i< str.length; i++) {
    let brackets = bracketsConfig.find(el => el.includes(str[i]))
    if (str[i] == brackets[1] && stack[0] == brackets[0]) { 
      stack.shift()
    } else if (str[i] == stack[0] && brackets[0] == brackets[1]) {
      stack.shift()
    } else {
      stack.unshift(str[i])
    }
  }
  return (!stack.length>0)
}