import React, {Component} from 'react';
import NavDefault from '../../components/nav/NavDefault';
import BuscaPontos from '../../components/busca-pontos/BuscaPontos';
import TabelaPontos from '../../components/tabela-pontos/TabelaPontos';
import CardSomatoriaBox from '../../components/card-somatoria-horas/CardSomatoriaHoras';
import RegistroPonto from '../../components/registro-ponto/RegistroPonto';
import './teste.css';
import PubSub from 'pubsub-js';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      mes: "",
      ano: ""
    }

    this.setMes = this
      .setMes
      .bind(this);

    this.setAno = this
      .setAno
      .bind(this);
  }

  componentDidMount(){
    this.setMes();
    this.setAno();
  }

  setMes() {
    PubSub.subscribe('atualiza-mes',function(topico,mes){
      this.setState({mes: mes});
    }.bind(this))
  }

  setAno() {
    PubSub.subscribe('atualiza-ano',function(topico,ano){
      this.setState({ano: ano});
    }.bind(this))
  }
  render() {
    return (
      <div>
        <NavDefault/>
        <div className="container">
          <BuscaPontos mes={this.state.mes} ano={this.state.ano}/>
          <TabelaPontos/>
          <CardSomatoriaBox/>
          <RegistroPonto/>
        </div>
      </div>
    );
  }
}

export default Home;
