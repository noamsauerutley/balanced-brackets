
let isBalanced = (input) => {

  let brackets = "[]{}()<>"
  let stack = []

  for(let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket)
    console.log(`input index: ${input.indexOf(bracket)}, the ${brackets[bracketsIndex]} bracket which is the element at index ${bracketsIndex} in the input string `)

    if(bracketsIndex === -1) {
      continue
    }

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
      console.log(`bracketsIndex = ${bracketsIndex}, the ${brackets[bracketsIndex]} bracket was just added, so the stack is currently ${stack}`)
    } else {
      if(stack.length === 0 || stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0
}

module.exports = isBalanced
