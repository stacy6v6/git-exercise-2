export const square = (n) => n * n

export const fahrenheit = (celsius) => celsius * 1.8 + 32

export const rectangleArea = (a, b) => a * b

export const isPalindrome = (str) => {
  const loweredStr = str.toLowerCase()

  for (let i = 0; i < str.length / 2; i += 1) {
    if (loweredStr[i] !== loweredStr[loweredStr.length - 1 - i]) {
      return false
    }
  }

  return true
}
