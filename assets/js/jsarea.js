window.onload=function(){
  var nome = document.getElementById('nome');
  var datanascmento = document.getElementById('datanasc');
  var email = document.getElementById('email');
  var senha1 = document.getElementById('senha1');
  var senha2 = document.getElementById('senha2');
  //Variável do objeto que será guardado
  var obj;
 
  const btn = document.getElementById('btn_enviar');
  btn.addEventListener("click", Teste);
}



 //Adiciona um ouvinte de evento ao botão para quando o usuário clicar nele
 function Teste(){
   //Monta o objeto que será salvo
   obj = {
     nome: nome.value,
     datanascmento: datanascmento.value,
     email: email.value,
     senha1: senha1.value,
     senha2: senha2.value
   };

   //Mostra no console o objeto antes de ser salvo no localStorage
   console.log(obj.valueOf());

   //Salva o objeto no localStorage
   localStorage[nome.value] = JSON.stringify(obj);

   //Mostra no console o objeto salvo
   console.log(JSON.parse(localStorage[nome.value]).valueOf());
 };