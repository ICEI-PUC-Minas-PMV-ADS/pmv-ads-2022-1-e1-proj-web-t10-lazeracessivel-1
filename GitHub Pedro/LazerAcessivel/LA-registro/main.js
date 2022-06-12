var salvarForm = function() {
    
    for(var i = 0; i <= 10; i++){
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var senha = document.getElementById("password")
    var data = document.getElementById("data")
    localStorage.setItem('nome', nome.value, i++)
    localStorage.setItem('email', email.value, i++)
    localStorage.setItem('senha', senha.value, i++)
    localStorage.setItem('data', data.value, i++)
    }
    
}

document.addEventListener('submit', salvarForm)

/* localStorage.setItem('nome', nome.value)
localStorage.setItem('email', email.value)
localStorage.setItem('senha', senha.value)
localStorage.setItem('data', data.value) */