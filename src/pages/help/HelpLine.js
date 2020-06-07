import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import HelpService from '../../services/HelpService';

const help_service = new HelpService();

class HelpLine extends Component {

    constructor(props) {
        super(props);
        this.state = { helps: [] }
    }

    componentDidMount() {
        var self = this;
        help_service.listHelp()
            .then(function (result) {
                self.setState({ helps: result })
            }).catch(error => {
                console.log("Error: ", error);
            });
    }

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
                                    <NavLink to="/">Dashboard</NavLink> <FeatherIcon icon="chevrons-right" /> Help Line
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="text-right">
                    <button data-toggle="modal" data-target="#open-modal" className="btn btn-info btn-sm mr-2 mt-2"><FeatherIcon icon="plus" /></button>
                    <hr />
                </div>
                <div className="page-container m-2 p-2">
                    <div className="help_by_category">
                        <h3>Help by category</h3>
                        <br />
                        <Row>
                            {this.state.helps.map(help =>
                                <Col key={help.id} className="pl-1 pr-1" md={2} sm={3} xs={3}>
                                    <div className="text-center help_category">
                                        <FeatherIcon icon="phone-call" />
                                        <h5 className="help_name">{help.title}</h5>
                                        <p>{help.help_text}</p>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

export default HelpLine;
