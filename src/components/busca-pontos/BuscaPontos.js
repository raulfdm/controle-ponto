import React, {Component} from 'react';
import './BuscaPontos.css';
import PubSub from 'pubsub-js';

class BuscaPontos extends Component {

  setMes(evento) {
    let mes = evento.target.value;
    PubSub.publish('atualiza-mes', mes)
  }
  setAno(evento) {
    let ano = evento.target.value;
    PubSub.publish('atualiza-ano', ano)
  }

  render() {
    return (
      <div id="busca-pontos">
        <form className="form-busca-pontos">
          <select
            value={this.props.mes}
            onChange={this.setMes}
            className="browser-default mes-filtro z-depth-1"
            required>
            <option value="" disabled>Mês</option>
            <option value="0">Janeiro</option>
            <option value="1">Fevereiro</option>
            <option value="2">Março</option>
            <option value="3">Abril</option>
            <option value="4">Maio</option>
            <option value="5">Junho</option>
            <option value="6">Julho</option>
            <option value="7">Agosto</option>
            <option value="8">Setembro</option>
            <option value="9">Outubro</option>
            <option value="10">Novembro</option>
            <option value="11">Dezembro</option>
          </select>
          <select
            value={this.props.ano}
            onChange={this.setAno}
            className="browser-default ano-filtro z-depth-1"
            required>
            <option value="" disabled>Ano</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
          </select>
          <button
            type="submit"
            className="btn light-blue darken-1 waves-effect waves-light btn-carregar btn-small z-depth-1">
            <i className="material-icons center">loop</i>
          </button>
        </form>
      </div>
    );
  }
}

export default BuscaPontos;
