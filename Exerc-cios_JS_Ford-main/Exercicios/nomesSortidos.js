// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

// vetor que vai armazenar os nomes
const nomes = [];

// nomes das 10 pessoas
for (let i = 1; i <= 10; i++) {
    const nome = prompt(`Digite o nome da pessoa ${i}:`);
    nomes.push(nome);
}
// nomes buscar
const nomeBusca = prompt("Digite um nome para pesquisar:");
const encontrado = nomes.includes(nomeBusca);

if (encontrado) {
    console.log("ACHEI!!");
} else {
    console.log("NÃO ACHEI!!");
}
