import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

class Help extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col className="pl-1 pr-1" md={2} sm={3} xs={3}>
                        <div className="text-center help_category">
                            <FeatherIcon icon="phone-call" />
                            <h5 className="help_name">Amgunance</h5>
                            <p>Uttara Sector#14</p>
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Help;
