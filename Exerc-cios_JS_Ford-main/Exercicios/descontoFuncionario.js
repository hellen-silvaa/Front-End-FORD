// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).



//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto

// Entrada de dados

let desconto = 0;
let compra = 100;
let cliente = 3;


const codCliente = parseInt(prompt("Digite o código do cliente (1 para cliente, 2 para funcionário, 3 para VIP):"));
const valorCompra = parseFloat(prompt("Digite o valor total da compra:"));

switch (codCliente) {

    case 1: //Cliente
        cliente = "cliente"
        console.log(`Olá ${cliente}!, você não tem descontos nas compras total a pagar: R$ ${compra}`)
        break;

    case 2: // Funcionário
        cliente = "funcionário"
        desconto = 0.1 *  compra
        console.log(`Olá ${cliente}!, você ganhou 10% de desconto no total da sua compra com ${desconto}% de desconto: R$ ${compra}`)
        break;

    case 3: // VIP
        desconto = 0.05 *  compra ;
        compra = compra - desconto
        console.log(`Olá ${cliente}!, você ganhou 5% de desconto no total da sua compra com ${desconto}% de desconto: R$ ${compra}`)
        break;
        break;
    default:
        // Cliente comum, sem desconto
        break;
}

// Cálculo do valor
const valorComDesconto = valorCompra - (valorCompra * desconto);

console.log(`O valor total da compra com desconto é: R$${valorComDesconto.toFixed(2)}`);
