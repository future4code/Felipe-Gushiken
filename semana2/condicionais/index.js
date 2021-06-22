// -------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------------

// EXERCÍCIO 01

// a)
// O teste verifica se o número digitado pelo usuário é par.

// b)
// Ele imprime a mensagem "Passou no teste" para números pares.

// c)
// Ele imprime a mensagem "Não passou no teste" para números ímpares.

// EXERCÍCIO 02

// a)
// O código serve para mostrar ao usuário o valor da fruta escolhida.

// b)
// O preço da fruta Maçã é R$2,25

// c)
// O preço da fruta Pêra é R$5

// EXERCÍCIO 03

// a)
// A primeira linha pede ao usuário que digite o primeiro número.

// b)
// Se o número digitado for 10, a mensagem será "Esse número passou no teste". Se o número digitado for -10, o console exibira uma mensagem de erro.

// c)
// Haverá erro no console pois a sintaxe utilizada está incorreta.

// -------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------

// EXERCÍCIO 01

// a) b)
const idadeUsuario = Number(prompt("Qual é a sua idade?"))

// c)
if (idadeUsuario > 18){
    console.log("Você pode dirigir")    
} else {
    console.log("Você não pode dirigir")
}

// EXERÍCIO 02

const verificarTurno = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno:")

// if (verificarTurno === "M") {
//     console.log("Bom dia!")
// } else if (verificarTurno === "V") {
//     console.log("Boa tarde!")
// } else if (verificarTurno === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Não entendi a mensagem. Me desculpe.")
// }

// EXERCÍCIO 03

switch (verificarTurno.toUpperCase()) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Não entendi a sua mensagem. Me desculpe")
}

// EXERCÍCIO 04

const generoFilme = prompt("Qual gênero de filme vocês vão assistir?").toLowerCase()
const valorIngresso = Number(prompt("Quanto custa o ingresso?"))

if (generoFilme === "fantasia" && valorIngresso <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme!")
}

// -------------------- DESAFIO --------------------

// EXERCÍCIO 01
