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
            alert('sucesso!');
            window.location.replace("/");
        })
        .catch(function (error) {            
            alert('fail!');
        })
});

btnLoginUser.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (resultado) {            
            window.location.replace("/");
        })
        .catch(function (error) {            
            alert('fail!');
        })
});