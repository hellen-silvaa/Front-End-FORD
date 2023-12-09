//ctrl = shift = n usamos para abrir o code runner

//é como uma caixa com outras caixas dentro, que podem ser acessadas através do seu 
// índice entre colchetes []. O primeiro índice é sempre o 0 (zero), portanto um vetor de 4 posições terá 
// índice de 0 a 3. Elas se comportam como variáveis em tudo, e preciso utilizar colchetes tanto na 
// declaração como no acesso aos dados.

//array em js é heterogenio, ou seja, podemos colocar qualquer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;


// //    indice  =   0    1   2    3        4 
// const valores = [18.0, 80, 43, 1.8888, "teste"]

// //var(array) -> definindo um indice 10 e atribuindo o valor de 967 para o array
// valores[10] = 967 // --> incluindo o indice 10 no array

// console.log(`
//     ${valores[0]}
//     ${valores[3].toFixed(1)} //limita as casas decimais em 2 após a virgula
//     ${valores[10]}
//     ${valores}
//     ${valores.length} //extensão do nosso array (numeral)
// `);

//IMPLEMENTAR MÉTODOS DE ARRAY

//MÉTODOS DE ARRAY 1 
//1 - push -> utilizado para adicionar itens no array (sempre na última posição!)
//    indice  =        0        1       2          3        
const pushArray = ['girafa', 'leão', 'coala', 'camaleão']

console.log(pushArray);

//adicionando valores
pushArray.push("cachorro caramelo")

//adicionar um ou mais elementos ao início do array.
pushArray.unshift("Animal01")

console.log(pushArray);

//2- pop -> remove o último item do array

//3- delete