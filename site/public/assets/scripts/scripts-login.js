function abrir() {
    open(window.location.href = 'dashboard.html');
}
    function validacao(){
        var email = document.getElementById("oi").value;
        var senha = document.getElementById("field-password").value
        if (email == "" && senha == "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        } else if (email != "techsoja@gmail.com" && senha != "techsoja123") {
        alert("Email ou Senha incorreto!")
            return false;
        }else{
            abrir()
            return true;
        }
    }



