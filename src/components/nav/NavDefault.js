import React, {Component} from 'react';
import './NavDefault.css';
import {Link} from 'react-router';

class NavDefault extends Component {
  render() {
    return (
      <div id="NavDefault">
        <ul id="dropdown-options-menu" className="dropdown-content">
          <li>
            <Link>conf</Link>
            <a id="btn-logout" href="#!">Log Out</a>
          </li>
        </ul>
        <nav className="main-nav">
          <div>
            <Link to="/" className="brand-logo center">Pontex</Link>
            <div className="nav-wrapper">
              <ul className="right">
                <li>
                  <a
                    className="dropdown-button"
                    data-beloworigin="true"
                    href="#!"
                    data-activates="dropdown-options-menu">
                    <i className="material-icons">more_vert</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavDefault;
