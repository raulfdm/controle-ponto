import React, {Component} from 'react';
import Autenticacao from '../../components/autenticacao/Autenticacao';
import RegistrarUsuario from '../../components/registrar-usuario/RegistrarUsuario';
import ModalRecuperarSenha from '../../components/modal-recuperar-senha/ModalRecuperarSenha';
import './login.css';

class LoginBox extends Component {
  render() {
    return (
      <main>
        <section className="title-app">
          <h3>Pontex</h3>
        </section>
        <Autenticacao/>
        <RegistrarUsuario/>
        <ModalRecuperarSenha/>
      </main>
    );
  }
}

export default LoginBox;
