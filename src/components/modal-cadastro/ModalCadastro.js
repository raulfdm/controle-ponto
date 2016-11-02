import React, {Component} from 'react';
import './modal-cadastro.css';

export default class ModalCadastro extends Component {
  render() {
    return (
      <div id="modal-cadastro" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Criar Usuário</h4>
          <form>
            <div className="input-field">
              <input
                type="text"
                name="nome_completo"
                className="validate"
                placeholder="Thomas A. Anderson"></input>
              <label htmlFor="emailRecuperar">Nome Completo</label>
            </div>
            <div className="input-field">
              <input
                type="email"
                name="email"
                className="validate"
                placeholder="neo@matrix.com"></input>
              <label htmlFor="emailRecuperar">E-mail</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                name="senha1"
                className="validate"
                placeholder="Digite sua senha"></input>
              <label htmlFor="emailRecuperar">Senha</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                name="senha2"
                className="validate"
                placeholder="Digite novamente sua senha"></input>
              <label htmlFor="emailRecuperar">Confirma senha</label>
            </div>
            <input type="submit" className="hide" id="cadastra-usuario-submit"></input>
          </form>
        </div>
        <div className="modal-footer">
          <label
            htmlFor="cadastra-usuario-submit"
            id="btnCadastrarUsuario"
            type="submit"
            className="waves-effect waves-light btn ">Cadastrar
            <i className="material-icons right">send</i>
          </label>
        </div>
      </div>
    );
  }
}
