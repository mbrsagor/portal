import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Footer from '../components/common/Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="position-relative">
                    <Container fluid>
                        <Row>
                            <Col sm={2} className="p-0 text-light sidebar_bg_color fix_height">
                                <Sidebar />
                            </Col>
                            <Col sm={10} className="p-0">

                                <div className="footer_child position-absolute">
                                    <Footer />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Layout;
