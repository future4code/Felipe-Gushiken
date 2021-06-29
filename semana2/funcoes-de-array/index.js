// -------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO --------------------

// EXERCÍCIO 01

// a)
// {nome: "Amanda Rangel", apelido: "Mandi" },
// {nome: "Laís Petra", apelido: "Laura" },
// {nome: "Letícia Chijo", apelido: "Chijo" }

// EXERCÍCIO 02

// a)
// Amanda Rangel
// Laís Petra
// Letícia Chinjo

// EXERCÍCIO 03

// a)
// {nome: "Amanda Rangel", apelido: "Mandi" }
// {nome: "Laís Petra", apelido: "Laura" }

// -------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------


// EXERCÍCIO 01

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a)

 const retornaNomesPets = (item) => {
     return item.nome
 }

 const nomesPets = pets.map(retornaNomesPets)
 console.log(nomesPets)

//  b)

const retornaRacaPets = (item) => {
    return item.raca === "Salsicha"
}

const racasPets = pets.filter(retornaRacaPets)
console.log(racasPets)

// c)

const descontoPoodle = (item) => {
    if (item.raca === "Poodle") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
    }
}

const poodle = pets.filter(descontoPoodle)
console.log(poodle)

// EXERCÍCIO 02

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a)

const retornaNomesProdutos = (item) => {
    return item.nome
}

const nomesProdutos = produtos.map(retornaNomesProdutos)
console.log(nomesProdutos)

// b)

const retornaDescontoProdutos = (item) => {
    return {
        nome: item.nome,
        preco: item.preco * 0.95
    }
}

const descontoProdutos = produtos.map(retornaDescontoProdutos)
console.log(descontoProdutos)

// c)

const retornaBebidas = (item) => {
    return item.categoria === "Bebidas"
}

const bebidas = produtos.filter(retornaBebidas)
console.log(bebidas)

// d)

const retornaYpe = (item) => {
    return item.nome.includes("Ypê")
}

const ype = produtos.filter(retornaYpe)
console.log(ype)

// e)

let nomeEPreco = ype.map((nomePrecoProduto) => {
    console.log(`Compre ${nomePrecoProduto.nome} por ${nomePrecoProduto.preco}`)
})
