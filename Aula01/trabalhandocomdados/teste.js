

const nomeArray = ["Hellen", "Guilherme", "Ivanilson", "Rafael", "Renata"];
const sobrenomeArray = ["Silva", "Amorim", "Félix", "Perdigão", "Santos" ];

const nomeCompletoArray = nomeArray.map((nome , index) => nome + " " + sobrenomeArray[index]);

console.log(nomeCompletoArray);


