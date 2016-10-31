import React, {Component} from 'react';
import './TabelaPontos.css';

class TabelaPontos extends Component {
  render() {
    return (
      <div id="PontoView" className="card">
        <table className="highlight centered responsive-table table-ponto">
          <thead className="card">
            <tr>
              <th>Data</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Total Trabalho</th>
              <th>Banco de horas</th>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td>23/10/2016</td>
          <td>08:00</td>
          <td>12:00</td>
          <td>13:00</td>
          <td>17:00</td>
          <td>00:00</td>
          <td>00:00</td>
          <td>08:00</td>
          <td>00:00</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TabelaPontos;
