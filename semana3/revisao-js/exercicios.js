// EXERCÍCIO 01
function inverteArray(array) {
  let novoArray =[]
  const tamanho = array.length

    for (let i = tamanho - 1; i >= 0; i--){
      novoArray.push(array[i])
    }
    console.log(novoArray)
    return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayDeNumerosParesElevadosADois = []

    for (let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
      arrayDeNumerosParesElevadosADois.push(array[i] * array[i])
    }
  }
  return arrayDeNumerosParesElevadosADois
} 

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayDeNumerosPares =[]

    for (let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        arrayDeNumerosPares.push(array[i])
      }
    }
    return arrayDeNumerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  // return Math.max(...array)
  let maiorNumero = -Infinity

    for (let i = 0; i < array.length; i++){
      if (array[i] > maiorNumero){
        maiorNumero = array[i]
      }
    }
    return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const tamanhoArray = (array.length)
  return tamanhoArray
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3

  const resposta = [(booleano1 && booleano2 && !booleano4), ((booleano1 && booleano2) || !booleano3), ((booleano2 || booleano3) && (booleano4 || booleano1)), (!(booleano2 && booleano3) || !(booleano1 && booleano3)), (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))]
  return resposta
}

// EXERCÍCIO 07 **
function retornaNNumerosPares(n) {
  let pares = []

    for (let i = 0; i < n; i++){
      pares.push(2 * i)
    }
        return pares
    }

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if (a !== b && b !== c){
    return "Escaleno"
  } else if (a === b && b === c){
    return "Equilátero"
  } else {
    return "Isósceles"
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  return {
    maiorNumero: Math.max(num1, num2), 
    maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0, 
    diferenca: Math.max(num1, num2) - Math.min(num1, num2)
}
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  const arrayMaiorEMenor =[]


}

// EXERCÍCIO 11
function ordenaArray(array) {
  const arrayOrdenado = []

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filmeFavorito
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}.`

  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novaPessoa = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return novaPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
  })
  return novoArray
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 18
  })
  return novoArray
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((elemento) => {
    return elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60
  })
  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter((elemento) => {
    return elemento.altura < 1.5 || elemento.idade <= 14 || elemento.idade >= 60
  })
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
