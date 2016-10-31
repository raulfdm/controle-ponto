import React, {Component} from 'react';
import './CardSomatoriaHoras.css'

class CardSomatoriaHoras extends Component {
  render() {
    return (
      <p className="card">{this.props.texto}
        <span id={this.props.id}>{this.props.total}</span>
      </p>
    );
  }
}

export default class CardSomatoriaBox extends Component {
  constructor(){
    super();

    this.state = {
      horasTrabalhadas: "00:00",
      bancoDeHoras: "00:00"
    }
  }
  render() {
    return (
      <div id="CardSomatoriaBox">
        <CardSomatoriaHoras texto="Horas Trabalhadas" id="horasTrabalhadas" total={this.state.horasTrabalhadas}/>
        <CardSomatoriaHoras texto="Banco de Horas" id="bancoDeHoras" total={this.state.bancoDeHoras}/>
      </div>
    );
  }
}
