import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

class PageTitle extends Component {
    state = {  }
    render() { 
        return (
            <div className="page_title">
                <div className="card">
                    <Row className="m-0">
                        <Col md={8}>
                            <div className="card-body">{this.props.title}</div>
                        </Col>
                        <Col className="text-right" md={4}>
                            <div className="card-body">
                                <a href="/dashboard">Dashboard</a> <FeatherIcon icon="chevrons-right" /> { this.props.sub_title }
                                </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
 
export default PageTitle;
