//Init
$('.modal-trigger').leanModal();

//Form
let formularioLogin = document.querySelector('.formulario-autenticacao form');
let formRecuperar = document.querySelector('#recuperar-senha');
//inputs
let emailLogin = document.getElementById('emailLogin');
let passwordLogin = document.getElementById('passwordLogin');

//buttons e links
let linkCadastroUser = document.getElementById('linkCadastroUser');
let linkForgotPassword = document.getElementById('linkForgotPassword');
let btnLoginUser = document.getElementById('btnLoginUser');
let botaoRec = document.querySelector('#btnRecuperarSenha');

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
  let auth = firebase.auth();
  let email = document.querySelector('#emailRecuperar');

  auth.sendPasswordResetEmail(email.value).then(() => {
    email.value = "";
    $('#modal-recuperar-senha').closeModal();
    Materialize.toast('Senha resetada com sucesso.<br>Por favor, verifique sua caixa de e-mail!', 8000);
  }, error => {
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
  firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
    .then(function (resultado) {
      window.location.replace("index.html");
    })
    .catch(function (error) {
      Materialize.toast('Usuário ou senha incorretos', 4000);
    });
}
