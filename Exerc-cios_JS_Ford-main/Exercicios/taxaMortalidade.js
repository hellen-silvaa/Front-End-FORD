// A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.

// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.



//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

//processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade


var escolhaUsuario = prompt("Digite 'natalidade' ou 'mortalidade' para calcular:");
switch (escolhaUsuario) {
        //natalidade
    case 'natalidade':
        var numeroCriancasNascidas = parseInt(prompt("Digite o número de crianças nascidas:"));
        var numeroHabitantesNatalidade = parseInt(prompt("Digite o número de habitantes:"));

        var taxaNatalidade = (numeroCriancasNascidas * 1000) / numeroHabitantesNatalidade;

        console.log("A taxa de natalidade é: " + taxaNatalidade.toFixed(2));
        break;
//mortalidade
    case 'mortalidade':
        var numeroObitos = parseInt(prompt("Digite o número de óbitos:"));
        var numeroHabitantesMortalidade = parseInt(prompt("Digite o número de habitantes:"));
        
        var taxaMortalidade = (numeroObitos * 1000) / numeroHabitantesMortalidade;

        console.log("A taxa de mortalidade é: " + taxaMortalidade.toFixed(2));
        break;

    default:
        console.log("Escolha inválida. Digite 'natalidade' ou 'mortalidade'.");
}
