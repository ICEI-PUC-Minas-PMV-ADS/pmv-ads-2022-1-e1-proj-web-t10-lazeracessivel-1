function logar() {
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")

    if( email.value == localStorage.getItem("email") && senha.value == localStorage.getItem("senha")){
        localStorage.setItem("acesso", true)
        alert("Autenticado com sucesso")
        window.location.href = '/index.html'
    }
    else{
        alert("Usuário ou senha inválidos.")
    }
}
