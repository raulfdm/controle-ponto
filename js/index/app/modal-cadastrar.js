'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var formularioCadastro = document.querySelector('#modal-cadastro form');

  var senha1 = formularioCadastro.elements["senha1"];
  var senha2 = formularioCadastro.elements["senha2"];

  senha1.addEventListener('change', validarSenha);
  senha2.addEventListener('change', validarSenha);
  formularioCadastro.addEventListener('submit', cadastraUsuario);

  function validarSenha() {
    if (senha1.value.length < 6) {
      senha1.setCustomValidity('Senha precisa ter no mínimo 6 caracteres');
    } else {
      senha1.setCustomValidity('');
      if (senha1.value != senha2.value) {
        senha2.setCustomValidity('Digite senhas iguais');
      } else {
        senha2.setCustomValidity('');
      }
    }
  }

  function cadastraUsuario(event) {
    event.preventDefault();

    //Salva as informações em um objeto
    var cadastro = {
      "nome_completo": formularioCadastro.elements['nome_completo'].value,
      "email": formularioCadastro.elements['email'].value,
      "senha": formularioCadastro.elements['senha1'].value
    };

    //Chama a API do firebase para gravar o resultado
    firebase.auth().createUserWithEmailAndPassword(cadastro.email, cadastro.senha).then(function () {
      //Se der sucesso, salva o DisplayName
      firebase.auth().currentUser.updateProfile({
        displayName: cadastro.nome_completo
      }).catch(function (error) {
        return console.log(error);
      });

      //Limpa o formulário
      limpaFormularioCadastro();
      //Fecha o Modal
      $('#modal-cadastro').closeModal();

      //Chama um toast avisando que deu certo
      Materialize.toast('Usuário cadastrado com sucesso', 4000);

      setTimeout(function () {
        window.location.replace("home.html");
      }, 1000);
    }).catch(function (error) {
      var mensagem = void 0;
      if (error.code == "auth/email-already-in-use") {
        mensagem = 'E-mail Já cadastrado!';
      } else if (error.code == "auth/invalid-email") {
        mensagem = 'E-mail Inválido!';
      } else if (error.code == "auth/network-request-failed") {
        mensagem = 'Erro ao conectar-se com o servidor, tente novamente.';
      } else {
        mensagem = 'Erro ao cadastrar, verifique no console.';
        console.log(error);
      }
      Materialize.toast(mensagem, 4000);
    });
  }

  function limpaFormularioCadastro() {
    var qtdeElementos = document.querySelector('#modal-cadastro form').elements.length;
    var index = 0;
    var elementoAtual = {};
    for (index; index < qtdeElementos; index++) {
      elementoAtual = document.querySelector('#modal-cadastro form').elements[index];
      elementoAtual.value = "";
      elementoAtual.classList.remove("valid");
      elementoAtual.classList.remove("invalid");
    }
  }
});
//# sourceMappingURL=modal-cadastrar.js.map
