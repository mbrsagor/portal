import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Help from '../../contagion/Help';
import AddHelp from './modal/AddHelp';

class HelpLine extends Component {
    render() {
        return (
            <>
                <div className="page_title">
                    <div className="card">
                        <Row>
                            <Col md={8}>
                                <div className="card-body">Help LIne</div>
                            </Col>
                            <Col className="text-right" md={4}>
                                <div className="card-body">
                                    <a href="/">Dashboard</a> <FeatherIcon icon="chevrons-right" /> Help Line
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="text-right">
                    <button data-toggle="modal" data-target="#open-modal" className="btn btn-info btn-sm mr-2 mt-2"><FeatherIcon icon="plus" /></button>
                    <AddHelp />
                    <hr />
                </div>
                <div className="page-container m-2 p-2">
                    <div className="help_by_category">
                        <h3>Help by category</h3>
                        <br />
                        <Help />
                    </div>
                </div>
            </>
        );
    }
}

export default HelpLine;
