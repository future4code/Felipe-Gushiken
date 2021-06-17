// -------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------------

// // EXERCÍCIO 01
// let array
// console.log('a. ', array)
// RESPOSTA: undefined

// array = null
// console.log('b. ', array)
// RESPOSTA: null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// RESPOSTA: 11

// let i = 0
// console.log('d. ', array[i])
// RESPOSTA: 3

// array[i+1] = 19
// console.log('e. ', array)
// RESPOSTA: 

// const valor = array[i+6]
// console.log('f. ', valor)
// RESPOSTA: 

// // EXERCÍCIO 02
// "Subi num ônibus em Marrocos"
// RESPOSTA: SUBI NUM ÔNIBUS EM MIRROCOS 27


// -------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------

// // EXERCÍCIO 01
const nome = prompt("Qual é o seu nome?")
const email = prompt("Digite o seu e-mail: ")

console.log(`O e-mail ${email} foi cadastrado com sucesso! Seja bem-vindo ${nome}`)

// // EXERCÍCIO 02
const comidasFavoritas = ["sashimi", "udon", "karague", "gohan", "yakissoba"]
console.log(comidasFavoritas)
console.log(`Essas são as minhas comidas favoritas:
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)

const comidaFavoritaDoUsuario = prompt("Qual é a sua comida favorita?")
console.log(`Essas são as minhas comidas favoritas:
${comidasFavoritas[0]}
${comidaFavoritaDoUsuario}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)

// // EXERCÍCIO 03
let listaDeTarefas = []
const tarefasASeremRealizadas1 = prompt("Cite a primeira tarefa que você precisa realizar: ")
const tarefasASeremRealizadas2 = prompt("Cite a segunda tarefa que você precisa realizar: ")
const tarefasASeremRealizadas3 = prompt("Cite a terceira tarefa que você precisa realizar: ")
listaDeTarefas = [tarefasASeremRealizadas1, tarefasASeremRealizadas2, tarefasASeremRealizadas3]
console.log(listaDeTarefas)

const tarefaRealizada = Number(prompt("Digite o número da tarefa que você já realizou: ")) -1
listaDeTarefasAtual = listaDeTarefas[tarefaRealizada]
console.log(`Você já realizou a tarefa ${listaDeTarefasAtual}`)

listaDeTarefas.splice(tarefaRealizada, 1)

console.log(listaDeTarefas)











