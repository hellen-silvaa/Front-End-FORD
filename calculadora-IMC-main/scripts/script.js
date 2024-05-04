//IMC
//1. capturar os valores - ok
//2. calcular o IMC -ok
//3. Gerar a classificação do IMC - ok
//4. Organizar as informações - ok
//5. salvar os dados em uma lista (array) -> localStorage - ok
//6. ler a lista com os dados(array) -> localStorage -> ok
//7. renderizar o conteúdo na tela -> ok
//8. botão limpar registros -> clear localStorage 

function rolarParaLista() {
    var listaDeUsuarios = document.getElementById('lista-de-usuarios');
    listaDeUsuarios.scrollIntoView({ behavior: 'smooth' });
}


//função responsável por chamar todas as outras e exibir o conteúdo na tela
function calcularImc(event) {
    event.preventDefault();

    let dadosUsuario = pegarValores()

    let imc = calcular( dadosUsuario.alturaUsuario, dadosUsuario.pesoUsuario )

    let classificarIMC = classificacaoImc(imc)

    let usuarioAtt = organizarDados(dadosUsuario, imc, classificarIMC)

    cadastrarUsuario(usuarioAtt)

    rolarParaLista()

    // window.scrollTo(0, document.body.scrollHeight)
    
    window.location.reload()
}

//Função para receber os valores dos inputs e converter o mesmo para um objeto
function pegarValores() {
    let nome = document.getElementById('nome').value.trim();
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)

    //variável de objeto recebendo os dados do front-end
    let dadosUsuario = {
        nomeUsuario: nome,
        alturaUsuario: altura,
        pesoUsuario: peso
    }

    return dadosUsuario;
}

function calcular(altura, peso) {
    let imc = peso / (altura * altura)

    return imc;
}

function classificacaoImc(imc) {
    if (imc < 18) {
        return "abaixo do peso";
    } else if (imc < 25) {
        return "peso normal"
    } else if (imc < 30) {
        return "sobrepeso"
    } else if (imc < 35) {
        return "Obesidade 1"
    } else {
        return "obesidade 2 e 3"
    }
}

function organizarDados(dadosUsuario, valorImc, classificacaoImc) {
    let dataAtual = Intl.DateTimeFormat('pt-BR', { timeStyle: 'long', dateStyle: 'short' }).format(Date.now());
    let dadosUsuarioAtt = {
        ...dadosUsuario,
        imc: valorImc.toFixed(2),
        classificacao: classificacaoImc,
        dataCadastro: dataAtual
    }

    return dadosUsuarioAtt;
}

//função responsável por armazenar o objeto dentro do local storage
function cadastrarUsuario(usuario) {
    let listaDeUsuario = []

    //validação para verificar se eu tenho algum dado dentro do local storage do navegador
    if (localStorage.getItem("usuariosCadastrados")) {
        listaDeUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }

    listaDeUsuario.push(usuario)

    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaDeUsuario))
}

function carregarUsuarios() {
    let listaUsuarios = []

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }

    if (listaUsuarios.length == 0) {
        let tabela = document.getElementById('corpo-tabela')

        tabela.innerHTML = `
            <tr class="linha-mensagem">
               <td colspan="6"> Nenhum usuário cadastrado </td> 
            </tr>
        `
    } else {
        montarTabela(listaUsuarios)
    }
}

window.addEventListener('DOMContentLoaded', () => carregarUsuarios());

function montarTabela(listaDeCadastrados) {
    let tabela = document.getElementById('corpo-tabela')

    listaDeCadastrados.forEach(pessoa => {

        tabela.innerHTML += `
            <tr>
                <td> ${pessoa.nomeUsuario} </td>
                <td> ${pessoa.alturaUsuario} </td>
                <td> ${pessoa.pesoUsuario} </td>
                <td> ${pessoa.imc} </td>
                <td> ${pessoa.classificacao} </td>
                <td> ${pessoa.dataCadastro} </td>
            </tr>
        `
    })
}


function deletarRegistros() {
    localStorage.clear("usuariosCadastrados")

    window.location.reload();
}