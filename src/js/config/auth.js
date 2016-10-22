//Form
let formularioLogin = document.querySelector('.auth-login');
//inputs
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');

//buttons e links
let linkCadastroUser = document.getElementById('linkCadastroUser');
let linkForgotPassword = document.getElementById('linkForgotPassword');
let btnLoginUser = document.getElementById('btnLoginUser');

//Eventos
/*btnCadastroUser.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (resultado) {            
            alert('sucesso!');
            window.location.replace("/");
        })
        .catch(function (error) {            
            alert('fail!');
        })
});*/


formularioLogin.addEventListener('submit', function(evento) {
    fazerLogin(evento)
});

emailInput.addEventListener('keypress', function(e) {
    if (validaEnter(e)) {
        fazerLogin(e);
    }
})
passwordInput.addEventListener('keypress', function(e) {
    if (validaEnter(e)) {
        fazerLogin(e);
    }
})

function validaEnter(e) {
    if (e.keyCode == 13) {

        return true;
    }
}

function fazerLogin(e) {
    e.preventDefault();
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function(resultado) {
            window.location.replace("/");
        })
        .catch(function(error) {
            Materialize.toast('Usuário ou senha incorretos', 4000)
        })
}