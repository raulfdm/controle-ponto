import React, {Component} from 'react';
import './modal-recuperar.css';

export default class ModalRecuperarSenha extends Component {
  render() {
    return (
      <div id="modal-recuperar-senha" className="modal">
        <div className="modal-content">
          <form id="recuperar-senha">
            <h4>Resetar Senha</h4>
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input id="emailRecuperar" type="email" className="validate"></input>
                <label htmlFor="emailRecuperar">E-mail</label>
                <input type="submit" id="recupera-submit" className="hide"></input>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <label
              htmlFor="recupera-submit"
              id="btnRecuperarSenha"
              type="submit"
              className="waves-effect waves-light btn ">Enviar Senha</label>
          </div>
        </div>
    )}
}
