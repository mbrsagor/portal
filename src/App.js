import '../src/style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashbaord';
import AddDisease from './pages/disease/modal/AddDisease';
import AddHelp from './pages/help/modal/AddHelp';
import AddDepartment from './pages/department/AddDepartment';
import AddContagion from './pages/contagion/AddContagion';
import AddExperience from './pages/experience/modal/AddExperience';
import AddAvailability from './pages/availability/AddAvailability';
import AddLaboratorie from './pages/laboratorie/AddLaboratorie';
import Login from './pages/auth/Login';
import Error404 from './pages/Error404';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/help" component={AddHelp} />
          <Route path="/add-disease" component={AddDisease} />
          <Route path="/add-department" component={AddDepartment} />
          <Route path="/add-contagion" component={AddContagion} />
          <Route path="/add-experience" component={AddExperience} />
          <Route path="/add-availability" component={AddAvailability} />
          <Route path="/add-laboratorie" component={AddLaboratorie} />
          <Route path="/login" component={Login} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
