function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados = numeros.sort(
    (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  }

  type rowData = {
    maior: number;
    menor: number;
    media: number
  }

  const estatisticas: rowData = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }
  return estatisticas
}
console.log(obterEstatisticas([10, 11, 12]))
// console.log([100, 12, 88, 17].sort((a, b) => a - b))

// 02.a)
// A entrada seria o 'numeros' e a saída seria a 'estatísticas'.

// 02.b)
// 

// 02.c)

