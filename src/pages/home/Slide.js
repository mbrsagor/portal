import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Wave } from 'react-animated-text';

class Slide extends Component {

    render() {
        return (
            <div className="slide">
                <Row className="m-0">
                    <Col lg={12}>
                        <div className="slide_content">
                            <h2> <Wave text="We are helping Covid-19 effected" /></h2>
                            <p className="ml-5">We are help all of pepole</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Slide;

/// tomar devlopment env setup
/// Hopefully r kno problem nai. tumi apajato slide.js and style.scss file akj kro