// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o
// preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o
// desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:

// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// Dica: utilize if / else if / else


//entrada de dados
// = criar variável para receber o nome do produto 
// = perguntar ao usuário qual vai ser a quantidade de produtos
// = perguntar o preço unitário do produto

//processamento de dados
// = realizar o calculo do total da quantidade do produto * valor unitário do produto 
// = realidar o calculo do desconto com base na quantidade de produtos que o usuário vai comprar

//saída de dados
// = mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
// = mostrar também o desconto de cada produto


let escolha = "A"
const precoDoLitroG = 5.30
const precoDoLitroA = 4.90
let litros = 30
let totalLitros = 0;
let desconto = 0;
let resu = 0;

switch (escolha) {
        //case A
    case "A":
        console.log('-----Álcool-----');
        console.log('até 20 litros, desconto de 3% por litro Álcool');
        console.log('acima de 20 litros, desconto de 5% por litro');
 
        if (litros == 20) {
            totalLitros = litros * precoDoLitroA
            desconto = (totalLitros * 3) / 100
            resu = totalLitros - desconto;
            console.log(`O total sem o desconto é: R$ ${totalLitros.toFixed(2)} e com 3% de desconto ficou: R$ ${resu.toFixed(2)}`)
        } else if (litros > 20) {
            totalLitros = litros * precoDoLitroA
            desconto = (totalLitros * 5) / 100
            resu = totalLitros - desconto;
            console.log(`O total sem o desconto é: R$ ${totalLitros.toFixed(2)} e com 5% de desconto ficou: R$ ${resu.toFixed(2)}`)
        } else {
            totalLitros = litros * precoDoLitroA
            console.log(`O total sem o desconto é: R$ ${totalLitros.toFixed(2)} `)
        }
        break;
//case B
    case "B":
        console.log('-----Gasolina-----');
        console.log('até 20 litros, desconto de 4% por litro Gasolina');
        console.log('acima de 20 litros, desconto de 6% por litro');
        console.log('-----//-----//-----//-----//-----//-----//-----')

        if (litros == 20) {
            totalLitros = litros * precoDoLitroA
            desconto = (totalLitros * 5) / 100
            resu = totalLitros - desconto;
            console.log(`O total sem o desconto é: R$ ${totalLitros.toFixed(2)} e com 5% de desconto ficou: R$ ${resu.toFixed(2)}`)
        } else if (litros > 20) {
            totalLitros = litros * precoDoLitroA
            desconto = (totalLitros * 6) / 100
            resu = totalLitros - desconto;
            console.log(`O total sem o desconto é: R$ ${totalLitros.toFixed(2)} e com 6% de desconto ficou: R$ ${resu.toFixed(2)}`)
        } else {
            totalLitros = litros * precoDoLitroA
            console.log(`O total sem o desconto é: R$ ${totalLitros.toFixed(2)} `)
        }
        break;

    default:
        console.log('Error')
        break;
}
