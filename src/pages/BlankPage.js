import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

class BlankPage extends Component {
    render() {
        return (
            <div className="page_title">
                <div className="card">
                    <Row>
                        <Col md={8}>
                            <div className="card-body">Basic card</div>
                        </Col>
                        <Col className="text-right" md={4}>
                            <div className="card-body">
                                <a href="/">Homepage</a> <FeatherIcon icon="chevrons-right" /> Blank Page
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default BlankPage;
