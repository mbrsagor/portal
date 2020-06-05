import style from '../src/style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Base from '../src/pages/Base';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Base} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
