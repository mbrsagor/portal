import '../src/style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from './pages/dashboard/Dashbaord';
import AddDisease from './pages/disease/modal/AddDisease';
import AddHelp from './pages/help/modal/AddHelp';
import AddHospital from './pages/hospital/AddHospital';
import Hospitaldetail from './pages/hospital/Hospitaldetail';
import AddContagion from './pages/contagion/AddContagion'
import MyTest from './pages/MyTest';
import Login from './pages/auth/Login';
import Error404 from './pages/Error404';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/help" component={AddHelp} />
          <Route path="/add-disease" component={AddDisease} />
          <Route path="/add-hospital" component={AddHospital} />
          <Route path="/my-test" component={MyTest} />
          <Route path="/hospital-detail/:id" component={Hospitaldetail} />
          <Route path="/add-contagion" component={AddContagion} />
          <Route path="/" component={Login} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
