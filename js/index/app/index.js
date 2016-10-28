'use strict';

//Init
$('.modal-trigger').leanModal();

//Form
var formularioLogin = document.querySelector('.formulario-autenticacao form');
var formRecuperar = document.querySelector('#recuperar-senha');
//inputs
var emailLogin = document.getElementById('emailLogin');
var passwordLogin = document.getElementById('passwordLogin');

//buttons e links
var linkCadastroUser = document.getElementById('linkCadastroUser');
var linkForgotPassword = document.getElementById('linkForgotPassword');
var btnLoginUser = document.getElementById('btnLoginUser');
var botaoRec = document.querySelector('#btnRecuperarSenha');

emailLogin.addEventListener('keypress', function (e) {
  if (validaEnter(e)) {
    btnLoginUser.click();
  }
});
passwordLogin.addEventListener('keypress', function (e) {
  if (validaEnter(e)) {
    btnLoginUser.click();
  }
});

formularioLogin.addEventListener('submit', function (evento) {
  fazerLogin(evento);
});

//Recuperar Senha
formRecuperar.addEventListener('submit', function (e) {
  e.preventDefault();
  var auth = firebase.auth();
  var email = document.querySelector('#emailRecuperar');

  auth.sendPasswordResetEmail(email.value).then(function () {
    email.value = "";
    $('#modal-recuperar-senha').closeModal();
    Materialize.toast('Senha resetada com sucesso.<br>Por favor, verifique sua caixa de e-mail!', 8000);
  }, function (error) {
    if (error.code == 'auth/user-not-found') Materialize.toast('E-mail incorreto', 4000);
  });
});

function validaEnter(e) {
  if (e.keyCode == 13) {
    return true;
  }
}

function fazerLogin(e) {
  e.preventDefault();
  firebase.auth().signInWithEmailAndPassword(emailLogin.value, passwordLogin.value).then(function (resultado) {
    window.location.replace("home.html");
  }).catch(function (error) {
    Materialize.toast('Usuário ou senha incorretos', 4000);
  });
}
//# sourceMappingURL=index.js.map
