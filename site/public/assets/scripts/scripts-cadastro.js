function cadastrar() {
    aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;
    var cpfVar = cpf_input.value;
    var siloVar = silo_input;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "" || cpfVar == "" || siloVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }
'
    // Enviando o valor da nova input'
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            cpfServer: cpfVar,
            siloServer: siloVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

            setTimeout(() => {
                window.location = "./login.html";
            }, "2000")

        } else {
            alert("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}