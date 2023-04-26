
    function cadastros() {
        open(window.location.href = 'login.html')
        
    }

    // document.getElementById("but-cadastro").addEventListener("click", function validar() 
    function validar(){
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value
        var senha = document.getElementById("field-password").value
        var validar = document.getElementById("field-password").value
        var cpf = document.getElementById("cpf").value


        if (nome == "" && email == "" && senha == "" && validar == "" && cpf == "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        } else if (nome == "miguel" && email == "miguel@sptech.com" && senha == "091002" && validar == "091002" && cpf == "123.456.789-00") {
            cadastros()
            return true;
        }


    };