import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Moment from 'react-moment';
import Spinner from '../../components/common/Spinner';
// import swal from "sweetalert";
import LocationService from '../../services/LocationService';

const locaiton_serivce = new LocationService();

class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        var self = this;
        locaiton_serivce.locationList()
            .then(function (response) {
                self.setState({
                    locations: response
                });
            }).catch(error => {
                console.log("Error, ", error);
            });
    };

    render() {

        // Loader 
        if (this.state.locations.length === 0) {
            return (
                <div className="text-center">
                    <Spinner />
                </div>
            )
        }
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
                                        <th>Status</th>
                                        <th>Created Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.locations && this.state.locations.map((location, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>#{location.id}</td>
                                                <td>{location.name}</td>
                                                <td>
                                                    {location.flag ? <img src="{location.flag}" alt={location.flag} /> : <FeatherIcon icon="flag" />}
                                                </td>
                                                <td>
                                                    {location.is_active ? 'Active' : 'Deactive'}
                                                </td>
                                                <td>
                                                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{location.created_at}</Moment>
                                                </td>
                                                <td>
                                                    <button
                                                        title="Update the location."
                                                        data-toggle="modal" data-target="#open-modal"
                                                        onClick={() => this.UpdateHospital(location)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <button
                                                        title="Delete the Location."
                                                        onClick={e => this.handleDelete(e, location.id)}
                                                        className="btn btn-danger btn-sm ml-2">
                                                        <FeatherIcon icon="trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    }
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
