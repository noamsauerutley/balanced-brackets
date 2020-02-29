
let isBalanced = (input) => {

  let brackets = "[]{}()<>"
  let stack = []

  for(let bracket of input) {
    let bracketIndex = brackets.indexOf(bracket)
    console.log(`input index: ${input.indexOf(bracket)}, the ${brackets[bracketIndex]} bracket which is the element at index ${bracketIndex} in the input string `)

    if(bracketIndex === -1) {
      continue
    }

    if(bracketIndex % 2 === 0) {
      stack.push(bracketIndex + 1)
      console.log(`bracketIndex = ${bracketIndex}, the ${brackets[bracketIndex]} bracket was just added, so the stack is currently ${stack}`)
    } else {
      if(stack.length === 0 || stack.pop() !== bracketIndex) {
        return false;
      }
    }
  }
  return stack.length === 0
}

module.exports = isBalanced
