import React, {Component} from 'react';
import './BuscaPontos.css'

class BuscaPontos extends Component {
  render() {
    return (
      <form className="form-busca-pontos">
        <select className="browser-default mes-filtro z-depth-1" required>
          <option value="" disabled defaultValue>Mês</option>
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
        <select className="browser-default ano-filtro z-depth-1" required>
          <option value="" disabled defaultValue>Ano</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
        </select>
        <button
          type="submit"
          className="btn light-blue darken-1 waves-effect waves-light btn-carregar btn-small z-depth-1">
          <i className="material-icons center">loop</i>
        </button>
      </form>
    );
  }
}

export default BuscaPontos;
