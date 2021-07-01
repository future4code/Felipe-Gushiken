```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000
  const comissao = (qtdeCarrosVendidos * 100) + (0.05 * valorTotalVendas)
  const salarioTotal = salarioFixo + comissao
  return salarioTotal
}
```