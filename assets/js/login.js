function logar() {
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")

    if( email.value == localStorage.getItem("email") && senha.value == localStorage.getItem("senha")){
        localStorage.setItem("acesso", true)
        alert("Autenticado com sucesso")
        window.location.href = '../pmv-ads-2022-1-e1-proj-web-t10-lazeracessivel-1/index.html'
    }
    else{
        alert("Usuário ou senha inválidos.")
    }
}
