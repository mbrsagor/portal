import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
// import Moment from 'react-moment';
import Spinner from '../../components/common/Spinner';
// import swal from "sweetalert";
// import { NavLink } from 'react-router-dom';
// import $ from 'jquery';


class Location extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // Loader 
        // if (this.state.hospitals.length === 0) {
        //     return (
        //         <div className="text-center">
        //             <Spinner />
        //         </div>
        //     )
        // }
        // /Loader

        return (
            <>
                <div className="page_title">
                    <div className="card">
                        <Row className="m-0">
                            <Col md={8}>
                                <div className="card-body">Location Page</div>
                            </Col>
                            <Col className="text-right" md={4}>
                                <div className="card-body">
                                    <a href="/dashboard">Dashboard</a> <FeatherIcon icon="chevrons-right" /> Location List
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="page-container m-2 p-2">
                    <div className="data_table_list">
                        <div className="text-right">
                            <button
                                data-toggle="modal"
                                data-target="#open-modal"
                                className="btn btn-info btn-sm mb-3">
                                <FeatherIcon icon="plus" />
                            </button>
                        </div>
                        <div className="shadow table_custom_class">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Flag</th>
                                        <th>Is Active</th>
                                        <th>Created Date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.state.hospitals && this.state.hospitals.map((hospital, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>#{hospital.id}</td>
                                                <td>{hospital.hospital_name}</td>
                                                <td>{hospital.location}</td>
                                                <td>
                                                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{hospital.created_at}</Moment>
                                                </td>
                                                <td className="text-right">
                                                    <button
                                                        title="Update the hospital."
                                                        data-toggle="modal" data-target="#open-modal"
                                                        onClick={() => this.UpdateHospital(hospital)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <NavLink
                                                        className="btn btn-info btn-sm ml-2"
                                                        to={`hospital-detail/${hospital.id}`}>
                                                        <FeatherIcon icon="link" />
                                                    </NavLink>
                                                    <button
                                                        title="Delete the hospital."
                                                        onClick={e => this.handleDelete(e, hospital.id)}
                                                        className="btn btn-danger btn-sm ml-2">
                                                        <FeatherIcon icon="trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    } */}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-normal">
                            <ul className="pagination mb-0">
                                <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="/">1</a></li>
                                <li className="page-item"><a className="page-link" href="/">2</a></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item"><a className="page-link" href="/">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Location;
