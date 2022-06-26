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















/* var salvarForm = function() {
    var nome = [document.getElementById("nome")]
    var email = [document.getElementById("email")]
    var senha = [document.getElementById("password")]
    var data = [document.getElementById("data")]
    JSON.parse(localStorage.setItem('nome'))
    JSON.parse(localStorage.setItem('email'))
    JSON.parse(localStorage.setItem('senha'))
    JSON.parse(localStorage.setItem('data'))
}    
document.addEventListener('submit', salvarForm) */

