//função para limpar o formulário;
function limparFormulario(){
    document.getElementById ('endereco').value = '';
    document.getElementById ('bairro').value = '';
    document.getElementById ('cidade').value = '';
    document.getElementById ('estado').value = '';
}
//Criar a função preencherFormulario e em seguida exibir na tela os dados que está vindo da API (Endereço, Cidade,Estado, Bairro)
const preencherFormulario = () => {
    document.getElementById ('endereco').value = dados.logradouro; 
    document.getElementById ('bairro').value = dados.bairro; 
    document.getElementById ('cidade').value = dados.estado; 
    document.getElementById ('estado').value = dados.uf; 
}

//validando se o cep tem apenas numeros
function eNumero(numero){
    return /^[0-9]+$/.test(numero);

}

//validar se o cep contem os 8 caracteres e se contém apeans numeros
const cepValido=(cep) => cep.length == 8 && eNumero(cep)

const getViaCep = async() => {
    //chamando a função sempre que realizar uma nova requisição
    limparFormulario();

    //criando variavel para armazenar o valor do CEP
    const cep = document.getElementById ('cep').value;

    //variavel recebendo a url da API
    const url = `http://viacep.com/ws/${cep}/json/`;

    if (cepValido) {
        const resposta = await fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
                
            }
        });

        const dados = await resposta.json();
        
        console.log(dados);
        
        //validação para o retorno da requisição. Operador ternário
        dados.hasOwnProperty('erro')? document.getElementById('endereco').value = "CEP não encontrado!" : preenherFormulario(dados)

    } else {
        document.getElementById ('endereco').value = "CEP incorreto! Tente novamente"
        
    }
}    

document.getElementById('cep')
.addEventListener('focusout', preencherFormulario())
// getViaCep;