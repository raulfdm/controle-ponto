import React, {Component} from 'react';

class CustomInput extends Component {
  render() {
    return (
      <div className="input-field">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}></input>
      </div>
    );
  }
}

export default CustomInput;
