function link(){
document.getSelection

}


var salvarForm = function() {
    list = []

    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var senha = document.getElementById("password")
    var data = document.getElementById("data")
    localStorage.setItem('nome', nome.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('senha', senha.value)
    localStorage.setItem('data', data.value)
}

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
    if (nascimento == ''){
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
            document.addEventListener('submit', salvarForm)
            window.location.href = "C:\Users\ertal\Desktop\LazerAcessivel\LA-login\teladeloginla.html"  
        }   
    }

    
}


