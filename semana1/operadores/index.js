// -------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------------

// ---------- EXERCÍCIO 01 ----------
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // true

// let resultado = bool1 && bool2 // true && false --> false
// console.log("a. ", resultado)  // a. false

// resultado = bool1 && bool2 && bool3 // true && false && true --> false
// console.log("b. ", resultado) // b. false

// resultado = !resultado && (bool1 || bool2) //  true && (true || false) // true && true
// console.log("c. ", resultado) // c. true

// console.log("d. ", typeof resultado) // boolean

// ---------- EXERCÍCIO 02 ----------
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// RESPOSTA: será impresso os valores digitados no prompt em forma de texto

// ---------- EXERCÍCIO 03 ----------
// RESPOSTA: inserir o comando Number antes do comando prompt. Desse jeito, o JS vai transformar o caractere digitado em número

// -------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------

// ---------- EXERCÍCIO 01 ----------
// const idadeUsuario = Number(prompt("Qual é a sua idade?"))
// const idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

// console.log("Sua idade é maior do que a do seu amigo?", idadeUsuario > idadeAmigo)
// console.log(idadeUsuario - idadeAmigo)

// // ---------- EXERCÍCIO 02 ----------
// const numeroPar = Number(prompt("Insira um número par: "))
// console.log(numeroPar % 2)

// // O padrão encontrado é que se o usuário digitar um valor par, o resto da divisão será 0.
// // Se o usuário digitar um valor ímpar, o resto da divisão será 1.

// // ---------- EXERCÍCIO 03 ----------
// const idade = Number(prompt("Qual é a sua idade?"))
// console.log("Idade em meses: ", idade * 12)
// console.log("Idade em dias: ", idade * 365)
// console.log("Idade em horas: ", idade * 8760)

// // ---------- EXERCÍCIO 04 ----------
// const primeiroNumero = Number(prompt("Digite um número: "))
// const segundoNumero = Number(prompt("Digite outro número: "))
// const divisivel1 = primeiroNumero % segundoNumero 
// const divisivel2 = segundoNumero & primeiroNumero

// console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
// console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
// console.log("O primeiro número é divisível pelo segundo?", divisivel1 == 0)
// console.log("O segundo número é divisível pelo primeiro?", divisivel2 == 0)
