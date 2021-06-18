// -------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------------

// EXERCÍCIO 01
// a) Será impresso os valores 10 e 50.
// b) Não apareceria nada no console.

// EXERCÍCIO 02
// a) Essa função procura a palavra 'cenoura' na frase digitada pelo usuário.
// b) 
// Eu gosto de cenoura --> true
// CENOURA é bom pra vista --> true
// Cenouras crescem na terra --> true


// -------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------

// EXERCÍCIO 01
// a)
// function dadosPessoais(){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }

// const nome = "Felipe"
// const idade = 32
// const cidade = "São Paulo"
// const profissao = "estudante"

// dadosPessoais()

// b)
// function dadosPessoais(nome, idade, cidade, profissao){
//     const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
//     return frase
// }

// const nome = prompt("Qual é o seu nome?")
// const idade = Number(prompt("Quantos anos você tem?"))
// const cidade = prompt("Você mora em qual cidade?")
// const profissao = prompt("Qual é a sua profissão?")
// const macroFrase = dadosPessoais(nome, idade, cidade, profissao)

// console.log(macroFrase)

// // EXERCÍCIO 02
// a)
// function somaDoisNumeros(num1, num2){
//     const soma = num1 + num2
//     return soma
// }

// const soma1 = somaDoisNumeros(10, 40)

// console.log(soma1)

// b)
// function doisNumeros(num1, num2){
//     const ehMaior = num1 >= num2
//     return ehMaior
// }

// const num1 = Number(prompt("Digite um número: "))
// const num2 = Number(prompt("Digite um número: "))

// const ehMaior1 = doisNumeros(num1, num2)

// console.log(ehMaior1)

// c)
// function numeroPar(num1){
//     const ehPar = num1 % 2 === 0
//     return ehPar
// }

// const num1 = Number(prompt("Digite um número: "))

// const ehPar1 = numeroPar(num1)

// console.log(ehPar1)

// d)
// function textoTamanhoCaixaAlta(texto){
//     const mensagemUsuario = texto.toUpperCase() + texto.length
//     return mensagemUsuario
// }

// const inserirMensagem = prompt("Digite a sua mensagem: ")
// const textoExercicio = textoTamanhoCaixaAlta(inserirMensagem)

// console.log(textoExercicio)

// // EXERCÍCIO 03
function somarDoisNumeros(num1, num2){
    const soma = num1 + num2
    return soma
}

function subtrairDoisNumeros(num1, num2){
    const subtracao = num1 - num2
    return subtracao
}

function multiplicarDoisNumeros(num1, num2){
    const multiplicacao = num1 * num2
    return multiplicacao
}

function divisaoDoisNumeros(num1, num2){
    const divisao = num1 / num2
    return divisao
}

const num1 = Number(prompt("Digite um número: "))
const num2 = Number(prompt("Digite um número: "))

const resultadoSoma = somarDoisNumeros(num1, num2)
const resultadoSubtracao = subtrairDoisNumeros(num1, num2)
const resultadoMultiplicacao = multiplicarDoisNumeros(num1, num2)
const resultadoDivisao = divisaoDoisNumeros(num1, num2)

console.log(`Os números digitados foram: ${num1} e ${num2}`)
console.log(`Soma: ${resultadoSoma}`)
console.log(`Subtração: ${resultadoSubtracao}`)
console.log(`Multiplicação: ${resultadoMultiplicacao}`)
console.log(`Divisão: ${resultadoDivisao}`)
















