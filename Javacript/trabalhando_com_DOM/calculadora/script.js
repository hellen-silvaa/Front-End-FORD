function Calcular() {

    let n1 = parseInt(document.getElementById('num1') .value)
    let n2 = parseInt(document.getElementById('num2') .value)
    let operacao = document.getElementById('operacao') .value
    let resultado;

    //Validação para o usuário não digitar palavras e apenas números
    //A propriedade global NaN é um valor especial que significa Not-A-Number (não é um número).
    if (NaN(n1) && NoN(n2)) {
        alert("Somente números")
    }

    switch (operacao) {
        case 'Somar':
            resultado = $ {n1} + $ {n2}
            
            alert(`O resultado da soma é: ${resultado}`)

            break;

        case 'Subtrair':
            resultado = n1 - n2

            alert(`O resultado da subtração é: ${resultado}`)

            break;

        case 'Multiplicar':
            resultado = n1 * n2

            alert(`O resultado da multiplicação é: ${resultado}`)

            break;

        case 'Dividir':
            resultado = n1 / n2

            alert(`O resultado da divisão é: ${resultado}`)

            break;

        default:
            alert('Opção inválida')
            break;
    }

}

