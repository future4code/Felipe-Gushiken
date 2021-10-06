// 01.a)
let minhaString: string = "Primeiro string no Typescript"
// minhaString = 8
// O VSCode acusa erro pois, inicialmente, a variável minhaString foi definida como tipo string. Sendo assim, ela não aceitará números ou valores booleanos.

// 01.b)
let meuNumero:number = 8
// Para que a variável meuNumero aceite strings, precisamos definir isso no tipo. Com isso, ela ficaria assim:
// let meuNumero: number | string = 8

// 01.c, d)
type pessoa = {
  nome: string,
  idade: number,
  corFavorita: string
}

enum corFavorita {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  INDIGO = "indigo",
  VIOLETA = "violeta"
}

const dadosDaPessoa: pessoa = {
  nome: "Felipe",
  idade: 32,
  corFavorita: corFavorita.VERMELHO
}

console.log(dadosDaPessoa)
