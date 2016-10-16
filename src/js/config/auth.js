//inputs
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');

//buttons
let btnCadastroUser = document.getElementById('btnCadastroUser');
let btnLoginUser = document.getElementById('btnLoginUser');

//Eventos
btnCadastroUser.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (resultado) {
            //console.log(resultado);
            alert('sucesso!');
        })
        .catch(function (error) {
            //console.log(error.code, error.message);
            alert('fail!');
        })
});

btnLoginUser.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (resultado) {
            //console.log(resultado);
            window.location.href = "/"
        })
        .catch(function (error) {
            //console.log(error.code, error.message);
            alert('fail!');
        })
});