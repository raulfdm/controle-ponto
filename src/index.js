import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home/Home';
import './css/index.css';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/pontos"/>
      {/*RotaDefault*/}
        <IndexRoute component={Home}/>
    </Route>

  </Router>
), document.getElementById('root'));
