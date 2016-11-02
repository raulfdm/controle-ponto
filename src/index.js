import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app/App';
import Home from './views/home/Home';
import LoginBox from './views/login/Login';

import {Router, Route, browserHistory,IndexRoute} from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={LoginBox}/>
        <Route path="/home" component={Home}/>
    </Route>


  </Router>
), document.getElementById('root'));
