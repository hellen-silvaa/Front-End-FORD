// trabalahr com variaveis, console.log

//utilizando padrão camelCase

// variavel (let, var, const) -> identificador -> dados

const meu_Carro = "Elétrico"
const fabricanteCarro = "Volvo"
const modeloCarro = "XC40"
const corCarro = "preto"
const anoCarro = "2024"

// console.log (meu_Carro);
// console.log(fabricanteCarro);
// console.log(modeloCarro);
// console.log(corCarro);
// console.log(anoCarro);

//saída de dados
//carro: "carro"
//const fabricanteCarro = "Volvo"
//const modeloCarro = "XC40"
//const corCarro = "cor"
//const anoCarro = "anoCarro"


// //Primeira forma: Concatenação
// console.log ("meu_Carro:" + meu_Carro + ", fabricante: " +fabricanteCarro + ", modelo do carro: " +modeloCarro + 
// ", cor do carro: " + corCarro + ", ano:" + anoCarro);

//Segunda forma: Interpolação
console.log(`${meu_Carro}, fabricante do carro: ${fabricanteCarro}, modelo carro: ${modeloCarro}, cor do carro: ${corCarro}, ano do carro: ${anoCarro}`);