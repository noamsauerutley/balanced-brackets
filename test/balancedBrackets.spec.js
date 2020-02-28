let isBalanced = require('../balancedBrackets.js')

describe("isBalanced", () => {
  test("it returns true for simple balanced brackets", () => {
    expect(isBalanced('()')).toEqual(true);
  })
})

