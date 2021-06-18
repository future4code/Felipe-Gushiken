// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do retângulo: "))
  const largura = Number(prompt("Digite a largura do retângulo :"))
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual: "))
  const anoDeNascimento = Number(prompt("Digite o seu ano de nascimento: "))
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const pesoUsuario = peso
  const alturaUsuario = altura
  const imc = pesoUsuario / (alturaUsuario * alturaUsuario)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite o seu nome: ")
  const idade = Number(prompt("Digite a sua idade: "))
  const email = prompt("Digite o seu e-mail: ")
  const fraseUsuario = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(fraseUsuario)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual é a sua cor favorita?")
  const cor2 = prompt("Qual é a sua cor favorita?")
  const cor3 = prompt("Qual é a sua cor favorita?")
  const arrayCores = [cor1, cor2, cor3]
  console.log(arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const frase = prompt("Digite uma frase: ")
  return frase.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custoEspetaculo = custo
  const ingresso = valorIngresso
  const sucesso = custoEspetaculo / ingresso
  return sucesso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const frase1 = string1
  const frase2 = string2
  const comparador = frase1.length === frase2.length
  return comparador
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const arrayPrimeiroElemento = array[0]
  return arrayPrimeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const arrayUltimoElemento = array[array.length - 1]
  return arrayUltimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const checaIgualdade = string1.toUpperCase() === string2.toUpperCase()
  return checaIgualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual1 = Number(prompt("Em qual ano estamos? "))
  const anoDeNascimento1 = Number(prompt("Em qual ano você nasceu? "))
  const anoDeEmissao = Number(prompt("Em qual ano a sua carteira de identidade foi emitida? "))
  const idade = anoAtual1 - anoDeNascimento1
  const renovarCarteira = anoAtual1 - anoDeEmissao
  const condicao1 = idade <= 20 && renovarCarteira >= 5
  const condicao2 = idade > 20 && idade <= 50 && renovarCarteira >= 10
  const condicao3 = idade > 50 && renovarCarteira >= 15
  console.log(condicao1 || condicao2 || condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto1 = ano % 400 == 0
  const bissexto2 = ano % 4 == 0 && !(ano % 100 == 0 && !(bissexto1)) 
  return bissexto1 || bissexto2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt("Você tem mais de 18 anos?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  const condicaoAprovar = maiorDeIdade == "sim" && escolaridade == "sim" && disponibilidade == "sim"
  console.log(condicaoAprovar)
}