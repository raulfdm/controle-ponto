import React, {Component} from 'react';
import './autenticacao.css';

class Autenticacao extends Component {
  render() {
    return (
      <section className="formulario-autenticacao">
        <form>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input
              id="emailLogin"
              type="email"
              className="validate"
              placeholder="rockatansky_max@mad.com.br"
              required></input>
            <label htmlFor="emailLogin">E-mail</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock_outline</i>
            <input id="passwordLogin" type="password" className="validate" required></input>
            <label htmlFor="passwordLogin">Senha</label>
          </div>
          <div className="btn-acoes">
            <button id="btnLoginUser" type="submit" className="waves-effect waves-light btn">Entrar</button>
            <a href="#modal-recuperar-senha" className="modal-trigger" id="linkForgotPassword">Esqueceu a senha?</a>
          </div>
        </form>
      </section>
    );
  }
}

export default Autenticacao;
