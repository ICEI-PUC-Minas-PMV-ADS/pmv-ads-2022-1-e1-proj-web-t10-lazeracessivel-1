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

document.addEventListener('submit', salvarForm)

