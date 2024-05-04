// Um posto está vendendo combustíveis com a seguinte tabela de descontos:

// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.


//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

//processamento de dados
// = switch case para gasolina ou alcool

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina


const tipoCombustivel = prompt("Digite o tipo de combustível (A para álcool, G para gasolina):").toUpperCase();
const litrosVendidos = parseFloat(prompt("Digite a quantidade de litros vendidos:"));

const precoAlcool = 4.90;
const precoGasolina = 5.30;

let desconto = 0;
let precoTotal = 0;


switch (tipoCombustivel) {
    case 'A':
        if (litrosVendidos <= 20) {
            desconto = 3;
        } else {
            desconto = 5;
        }
        precoTotal = litrosVendidos * (precoAlcool - (precoAlcool * (desconto / 100)));
        break;

    case 'G':
        if (litrosVendidos <= 20) {
            desconto = 4;
        } else {
            desconto = 6;
        }
        precoTotal = litrosVendidos * (precoGasolina - (precoGasolina * (desconto / 100)));
        break;

    default:
        console.log("Tipo de combustível inválido.");
        break;
}

if (precoTotal > 0) {
    console.log(`O valor a ser pago é R$ ${precoTotal.toFixed(2)} com ${desconto}% de desconto.`);
    alert("Obrigado, volte sempre!");
}
