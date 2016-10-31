import React, {Component} from 'react';
import NavDefault from '../nav/NavDefault';
import BuscaPontos from '../busca-pontos/BuscaPontos';
import TabelaPontos from '../tabela-pontos/TabelaPontos';
import CardSomatoriaBox from '../card-somatoria-horas/CardSomatoriaHoras';
import RegistroPonto from '../registro-ponto/RegistroPonto';
import './teste.css';

class Home extends Component {
  render() {
    return (
      <div>
        <NavDefault />
        <div className="container">
          <BuscaPontos/>
          <TabelaPontos/>
          <CardSomatoriaBox/>
          <RegistroPonto/>
        </div>
      </div>
    );
  }
}

export default Home;
