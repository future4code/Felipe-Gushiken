// -------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------------

// EXERCÍCIO 01

// a)
// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h

// EXERCÍCIO 02

// a)
// {nome: Juca, idade: 3, raca: SRD}
// {nome: Juba, idade: 3, raca: SRD}
// {nome: Jubo, idade: 3, raca: SRD}
// b)
// O três pontos servem para copiar os dados do objeto correspondente.

// EXERCÍCIO 03

// a)
// b)

// -------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------

// EXERCÍCIO 01

// a) 
const pessoa = {
    nome: "Felipe",
    apelidos: ["Fê", "Lipe", "Phil"]
}

const frase = (pessoa) => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

frase(pessoa)

//b)
const novosApelidos = {...pessoa, apelidos: ["F", "F4", "Gush"]}
console.log(novosApelidos)

// EXERCÍCIO 02

// a)
const pessoa1 = {
    nome: "Tais",
    idade: 29,
    profissao: "esteticista"
}

const pessoa2 = {
    nome: "Juquinha",
    idade: 30,
    profissao: "webdesigner"
}

// b)
function frase1 (pessoa1) {
    console.log(`${pessoa1.nome}, ${pessoa1.nome.length}, ${pessoa1.idade}, ${pessoa1.profissao}, ${pessoa1.profissao.length}`)
}

frase1(pessoa1)

function frase2 (pessoa2) {
    console.log(`${pessoa2.nome}, ${pessoa2.nome.length}, ${pessoa2.idade}, ${pessoa2.profissao}, ${pessoa2.profissao.length}`)
}

frase2(pessoa2)

// EXERCÍCIO 03

// a)
const carrinho = []

// b)
const objeto1 = {
    nome: "laranja",
    disponibilidade: true
}

const objeto2 = {
    nome: "uva",
    disponibilidade: true
}

const objeto3 = {
    nome: "manga",
    disponibilidade: true 
}

// c)
const addCarrinho = (objeto1, objeto2, objeto3) => {
    carrinho.push(objeto1, objeto2, objeto3)
}

addCarrinho(objeto1, objeto2, objeto3)

// d)
console.log(carrinho)













