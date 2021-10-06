// 01.a)
// 

// 01.b;c)
const chalk = require("chalk")
if (process.argv[2] !== undefined && process.argv[3] !== undefined) {
  return (
    console.log(`Olá, ${chalk.blue(process.argv[2])}! Você tem ${chalk.green(+(process.argv[3]))} anos.`), console.log(`Olá, ${chalk.blue(process.argv[2])}! Você tem ${chalk.green(+(process.argv[3]))} anos. Em sete anos, você terá ${chalk.yellow(+(process.argv[3]) + 7)} anos.`)
  )
} else {
  return console.log(chalk.red("Digite os valores solicitados"))
}
