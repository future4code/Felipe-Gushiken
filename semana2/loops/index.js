// -------------------- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO --------------------

// EXERCÍCIO 01
// O código vai incremetar o valor de i ao número "valor". Ficará i + valor. O console exibirá 10.

// EXERCÍCIO 02

// a)
// Serão impressos os números maiores que 18: 19, 21, 23, 25, 27, 30

// b)
// 

// EXERCÍCIO 03


// -------------------- EXERCÍCIO DE ESCCRITA DE CÓDIGO -------------------- 

// EXERCÍCIO 01

let bichinhosUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))

const arrBichinhos = []

if (bichinhosUsuario === 0) {
  console.log("Que pena! Você pode adotar um pet!")
} else if (bichinhosUsuario > 0) {
  let i = 0
  while (i < bichinhosUsuario) {
    const nomesBichinhos = prompt("Digite os nomes dos bichinhos: ")
    arrBichinhos.push(nomesBichinhos) 
    i++
  }
  console.log(arrBichinhos)
}

// EXERCÍCIO 02

// a)

const arrayOriginal = [10, 40, 50, 100, 200, 800, 999]

for(let numero of arrayOriginal) {
  console.log(numero)
}

// b)

for (let numero of arrayOriginal) {
  console.log(numero / 10)
}

// c)

const novoArray = []

for (let numero of arrayOriginal) {
  if (numero % 2 === 0) {
    novoArray.push(numero)
  }
}

console.log(novoArray)

// d)

const arrayStrings





