// module.exports = function check(str, bracketsConfig) {
function check(str, bracketsConfig) {
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
let str = '())('
let str2 = '([{}])'
let str3 = '||'
let str4 = '111115611111111222288888822225577877778775555666677777777776622222'
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
console.log(check(str4,config6))