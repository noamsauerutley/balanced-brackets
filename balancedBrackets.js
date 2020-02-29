
function isBalanced(input){

  let brackets = "[]{}()<>"
  let stack = []

  for(let bracket of input) {
    let bracketIndex = brackets.indexOf(bracket)

    if(bracketIndex === -1) {
      continue
    }

    if(bracketIndex % 2 === 0) {
      stack.push(bracketIndex + 1)
    } else {
      if(stack.length === 0 || stack.pop() !== bracketIndex) {
        return false;
      }
    }
  }
  return stack.length === 0
}

module.exports = isBalanced
