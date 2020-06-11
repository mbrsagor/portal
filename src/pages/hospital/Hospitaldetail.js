import React, { Component } from 'react';
import HospitalService from '../../services/HospitalService';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const hospital_service = new HospitalService();

class Hospitaldetail extends Component {

    state = {
        hospital: {}
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        hospital_service.getHospital(params.id)
            .then(response => {
                this.setState({
                    hospital: response
                });
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <>
                <div className="page_title">
                    <div className="card">
                        <Row>
                            <Col md={8}>
                                <div className="card-body">{this.state.hospital.hospital_name} detail</div>
                            </Col>
                            <Col className="text-right" md={4}>
                                <div className="card-body">
                                    <a href="/">Homepage</a> <FeatherIcon icon="chevrons-right" /> Hospital Detail page
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="page-container m-2 p-2">
                    <Row>
                        <Col md={12}>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Hospital Name
                                    <span className="badge badge-info badge-pill">{this.state.hospital.hospital_name}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Location
                                    <span className="badge badge-info badge-pill">{this.state.hospital.location}</span>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Hospitaldetail;