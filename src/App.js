import '../src/style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../src/components/common/Header'
import Footer from '../src/components/common/Footer'
import Sidebar from '../src/components/common/Sidebar'

// import Error404 from './pages/Error404';
import Dashboard from './pages/dashboard/Dashbaord';
import HelpLine from './pages/help/HelpLine';
import Disease from './pages/disease/Disease';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <>
            <Header />
            <div className="position-relative">
              <Container fluid>
                <Row>
                  <Col sm={2} className="p-0 text-light sidebar_bg_color fix_height">
                    <Sidebar />
                  </Col>
                  <Col sm={10} className="p-0">
                    {/* start route form here */}
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/help-line" component={HelpLine} />
                    <Route path="/disease" component={Disease} />
                    {/* <Route component={Error404} /> */}
                    {/* end route form here */}
                    <div className="footer_child position-absolute">
                      <Footer />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
