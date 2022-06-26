function validar() {
    var senha = formuser.senha.value;
    var repSenha = formuser.repSenha.value;
    var nome = formuser.nome
    var nascimento = formuser.nascimento.value
    var email = formuser.email.value

    if (nome == ''){
        alert("Preencha os campos corretamente!")
    }
    if (email == ''){
        alert("Preencha os campos corretamente!")
    }
    else {
        if(senha == '' || senha.length <= 5) {
            alert('Preencha o campo com mínimo 6 carácteres')
            formuser.senha.focus();
            return false;
        }
        if(senha != repSenha) {
            alert('Senhas diferentes');
            form1.repSenha.focus();
            return false;
        }
        else {
            alert("Registrado com sucesso!")
            let acesso = true
            document.addEventListener('submit', salvar)
            window.location.href = "../teladeloginla.html" 
        }   
    }

    
}


