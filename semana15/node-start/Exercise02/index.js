// 02)
const chalk = require("chalk")
const operacao = () => {
  if (process.argv[2, 3, 4] !== undefined) {
    switch (process.argv[2]) {
      case "add":
        return chalk.green(+(process.argv[3]) + +(process.argv[4]))
      case "sub":
        return chalk.blue(+(process.argv[3]) - +(process.argv[4]))
      case "mult":
        return chalk.green(+(process.argv[3]) * +(process.argv[4]))
      case "div":
        return chalk.blue(+(process.argv[3]) / +(process.argv[4]))
    }
  } else {
    return chalk.red("Digite os parâmetros necessários.")
  }
}

console.log(operacao())