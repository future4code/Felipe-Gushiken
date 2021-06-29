/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 **/


const permissaoParaJogar = Number(prompt("Quantos anos você tem?"))
if (permissaoParaJogar >= 18) {
   console.log("Bem vindos ao Blackjack!")

   let cartasUsuario1 = comprarCarta()
   let cartasUsuario2 = comprarCarta()
   let cartasBot1 = comprarCarta()
   let cartasBot2 = comprarCarta()

   let somaCartasUsuario = cartasUsuario1.valor + cartasUsuario2.valor
   let somaCartasBot = cartasBot1.valor + cartasBot2.valor

   console.log(`Usuário: cartas ${cartasUsuario1.texto} e ${cartasUsuario2.texto} = ${somaCartasUsuario}`)
   console.log(`Bot: cartas ${cartasBot1.texto} e ${cartasBot2.texto} = ${somaCartasBot}`)

   if (somaCartasUsuario > somaCartasBot) {
      console.log("O usuário venceu!")
   } else if (somaCartasBot > somaCartasUsuario) {
      console.log("O computador ganhou!")
   } else if (somaCartasUsuario === somaCartasBot) {
      console.log("Empate")
   }

} else {
   console.log("Você não pode jogar.")
}