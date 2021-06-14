// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 01.
// let a = 10
// let b = 10

// RESPOSTA: 10

// b = 5

// RESPOSTA: 10, 5

// 02.
// let a = 10
// let b = 20
// let c
// c = a
// b = c
// a = b

// console.log(a, b, c)
// RESPOSTA: 10 10 10

// 03.
// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)
// RESPOSTA: No lugar do p eu colocaria horasDia
// RESPOSTA: No lugar do t eu colocaria valorDia

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 01.
// let nome
// let idade

// console.log(typeof nome, typeof idade)
//  Foram impressos undefined pois não há valores atribuídos às variáveis nome e idade

const nome = prompt("Qual é o seu nome?")
const idade = Number(prompt("Qual é a sua idade?"))

console.log(typeof nome, typeof idade)

// O console retornou uma string e um número pois usei a ferramenta Number para definir esse tipo

console.log("Olá", nome, "você tem", idade, "anos!")

// 02.
const pergunta1 = prompt("Você está com frio hoje?")
console.log(pergunta1)

const pergunta2 = prompt("Você está se sentindo bem hoje?")
console.log(pergunta2)

const pergunta3 = prompt("Você gostou da aula de hoje?")
console.log(pergunta3)

console.log("Você está com frio hoje?", pergunta1, "Você está se sentindo bem hoje?", pergunta2, "Você gostou da aula de hoje?", pergunta3)

// 03. 
let a = 10
let b = 25
let c

a = c
b = a
c = b

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

