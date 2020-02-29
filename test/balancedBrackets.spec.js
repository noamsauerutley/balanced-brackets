let isBalanced = require('../balancedBrackets.js')

describe("isBalanced", () => {

  test("it returns true for simple balanced brackets", () => {
    expect(isBalanced('()')).toEqual(true)
  })

  test("it returns true for multiple balanced brackets", () => {
    expect(isBalanced('()[]{}<>')).toEqual(true)
  })

  test("it returns true for nested balanced brackets", () => {
    expect(isBalanced('([{<>}])')).toEqual(true)
  })

  test("it returns true for complex balanced strings", () => {
    expect(isBalanced('([])[{}]{(())}')).toEqual(true)
  })

  test("it returns false for simple unbalanced brackets", () => {
    expect(isBalanced('(')).toEqual(false)
  })

  test('it returns false for complex unbalanced brackets', () => {
    expect(isBalanced('([])[{}]{(([))}')).toEqual(false)
  })

  test("it returns false for balanced brackets containing unbalanced brackets", () => {
    expect(isBalanced('({)')).toEqual(false)
  })

  test("it returns false for balanced but overlapping brackets", () => {
    expect(isBalanced('([)]'))
  })

  test("it returns false for matched but unbalanced brackets", () => {
    expect(isBalanced('([])[{}]{([)]}')).toEqual(false)
  })

  test("it returns false for extra closing brackets", () => {
    expect(isBalanced('()]')).toEqual(false)
  })


})

