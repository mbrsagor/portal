import '../src/style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Error404 from './pages/Error404';
// import BlankPage from './pages/BlankPage';
import Dashboard from './pages/dashboard/Dashbaord';
import AddDisease from './pages/disease/modal/AddDisease';
import AddHelp from './pages/help/modal/AddHelp';
import AddHospital from './pages/hospital/AddHospital';
import Hospitaldetail from './pages/hospital/Hospitaldetail';
import MyTest from './pages/MyTest';
import Login from './pages/auth/Login';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <>
            {/* start route form here */}
            <Route exact path="/" component={Dashboard} />
            <Route path="/help" component={AddHelp} />
            <Route path="/add-disease" component={AddDisease} />
            <Route path="/add-hospital" component={AddHospital} />
            <Route path="/my-test" component={MyTest} />
            <Route path="/hospital-detail/:id" component={Hospitaldetail} />
            <Route path="/login" component={Login} />
            {/* <Route component={Error404} /> */}
            {/* end route form here */}
          </>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
