let dados1 = function(){
    lista = []
    let nome = document.getElementById("nome");
    let data = document.getElementById("data");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confsenha = document.getElementById("confsenha");
    localStorage.setItem('nome', nome.value)
    localStorage.setItem('data', data.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('senha', senha.value)
    localStorage.setItem('confsenha', confsenha.value)
}
document.addEventListener('submit', dados1);