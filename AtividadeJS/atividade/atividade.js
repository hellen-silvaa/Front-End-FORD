
const aluno ='Amanda';
const nota1=5
const nota2=10
const nota3=3

const media= (nota1 + nota2 + nota3) / 3

if (media >=7) {
  console.log(`A média da ${aluno} é ${media.toFixed(1)} está Aprovado`);
} else if (media <=4.9){
console.log(`A média da ${aluno} é ${media.toFixed(1)} está Reprovado`);
} else {(media <= 5 , 6.9)
console.log(`A média da ${aluno} é ${media.toFixed(1)} está Recuperação`);
}

// if (condicao1) {
//   código da condição 1
// } else if (condicao2) {
//   código da condição 2
// } else {
//   // código se nenhuma das condições for verdadeira

// } else