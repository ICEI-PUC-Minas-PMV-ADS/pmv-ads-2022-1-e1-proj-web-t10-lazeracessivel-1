function logar() {
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")

    if( email.value == "admin@admin.com" && senha.value == "123456") {
        localStorage.setItem("acesso", true)
        window.location.href = "teladelogin.html"
    }
    else{
        alert("Usuário ou senha inválidos.")
    }
}