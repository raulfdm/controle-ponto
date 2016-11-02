import React, {Component} from 'react';
import ModalCadastro from '../modal-cadastro/ModalCadastro';
import './registrar-usuario.css';

export default class RegistrarUsuario extends Component {
  render() {
    return (
      <section className="signup">
        <p>Não possui conta?
          <a href="#modal-cadastro" className="modal-trigger" id="linkCadastroUser">
            Crie uma!</a>
        </p>
        <ModalCadastro/>
      </section>
    );
  }
}
