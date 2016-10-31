import React, {Component} from 'react';
import CustomInput from '../gerais/CustomInput'
//Css
import './ButtonAdicionaRegistro.css';
import './RegistroPonto.css';

class ButtonAdicionaRegistro extends Component {

  componentDidMount() {}
  render() {
    return (
      <div className="fixed-action-btn btn-modal-registro">
        <a
          data-target="modal-registro"
          className="btn-floating btn-large waves-effect waves-light red modal-trigger">
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export default class RegistroPonto extends Component {
  render() {
    return (
      <div>
        <div id="modal-registro" className="modal modal-fixed-footer">
          <h5 className="center-align">Registro de Ponto</h5>
          <div className="modal-container">
            <form action="#" className="modal-content form-cadastro-ponto">
              <CustomInput
                label="Data"
                id="data_registro"
                name="data_registro"
                type="text"
                placeholder="30/12/1990"/>
              <CustomInput
                label="Horário"
                id="hora_registro"
                name="hora_registro"
                type="text"
                placeholder="08:00"/>
              <input type="submit" id="salva-registro"></input>
            </form>
            <div className="salva-deleta modal-footer">
              <button id="btn-deleta-ponto">
                <i className="material-icons center">delete</i>
              </button>
              <label
                htmlFor="salva-registro"
                id="btn-registra-ponto"
                className="btn-small light-blue darken-4 col s12 btn waves-effect waves-light center"
                type="submit"
                name="action">
                <i className="material-icons center">done</i>
              </label>
            </div>
            <div className="confirma-exclusao-content modal-footer">
              <p>Deseja excluir?</p>
              <button id="btn-excluir-nao" className="btn btn-small">Não</button>
              <button id="btn-excluir-sim" className="btn red lighten-2 btn-small">Sim</button>
            </div>
          </div>
        </div>
        <ButtonAdicionaRegistro/>
      </div>
    );
  }
}
