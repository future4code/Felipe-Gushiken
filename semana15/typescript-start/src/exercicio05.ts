// 05)

const operations = (a: number, b: number) => {
  let results = [a + b, a - b, a * b, a / b, Math.max(a, b)]
  return results
}
console.log(operations(10, 20))