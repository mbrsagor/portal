import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Slide extends Component {

    render() {
        return (
            <div className="slide">
                <Row className="m-0">
                    <Col lg={12}>
                        <h2>Covid-19 help 2020</h2>
                        <p className="ml-5">We are help all of pepole</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Slide;