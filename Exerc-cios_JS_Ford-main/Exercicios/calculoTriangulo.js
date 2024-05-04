// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.


//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console

// Entrada de dados
let L1 = parseFloat(prompt("Digite o 1°  lado:"));
let L2 = parseFloat(prompt("Digite o 2°  lado:"));
let L3 = parseFloat(prompt("Digite o 3°  lado:"));


// Processamento
if (L1 === L2 && L2 === L3) {

    // Triângulo Equilátero (Possui todos os três lados iguais)
    alert("O triângulo é Equilátero.");
} else if (L1 === L2 || L1 === L3 || L2 === L3) {

    // Triângulo Isósceles (Tem dois lados iguais e um lado diferente)
    alert("O triângulo é Isósceles.");
} else {

    // Triângulo Escaleno (Todos os três lados têm comprimentos diferentes)
    alert("O triângulo é Escaleno.");
}

