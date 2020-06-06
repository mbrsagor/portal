import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../common/Nav';

class Header extends Component {
    render() {
        return (
            <header>
                <Container fluid>
                    <Row>
                        <Col>
                            <Nav/>
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}

export default Header;