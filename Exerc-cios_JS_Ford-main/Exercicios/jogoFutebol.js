// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.

//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo

//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol

let t1 = prompt("Digite o nome do primeiro time:");
let t2 = prompt("Digite o nome do segundo time:");
let placarT1 = parseInt(prompt(`Digite o placar de ${t1}:`));
let placarT2 = parseInt(prompt(`Digite o placar de ${t2}:`));


if (placarTime1 === placarTime2) {
    console.log("O jogo entre ${t1} e ${t2} empatou!");

} else if (placarTime1 > placarTime2) {
    console.log(`O ${t1} venceu o jogo!`);

} else {
    console.log(`O ${t2} venceu o jogo!`);
}
