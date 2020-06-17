import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
// import { ToastsContainer, ToastsStore } from 'react-toasts';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Sidebar from '../../../components/common/Sidebar';
import $ from 'jquery';
import Location from '../Location';
import LocationService from '../../../services/LocationService';

const location_service = new LocationService();

class AddLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            parent: '',
            flag: '',
            is_active: ''
        }
    }

    handleCreate() {
        location_service.createLocation({
            'name': this.refs.name.value,
            'parent': this.refs.parent.value,
            'flag': this.refs.flag.value,
            'is_active': this.refs.is_active.value,
        }).then((response => {
            console.log(response);
        })).catch((error => {
            console.log(error);
        }))
    }

    // Close modal after sumited
    close_modal_box() {
        $('#open-modal').modal('hide');
    }

    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params) {
            if (this.refs.name.value.length === 0) {
                this.setState({
                    name: "Fill up the name"
                });
            } else if (this.refs.flag.value.length > 0) {
                this.setState({
                    flag: "Please upload image"
                })
            } else {
                this.close_modal_box()
                this.handleCreate()
            }
        }

        event.preventDefault();
        event.target.reset();
    }

    render() {
        return (
            <>
                <Header />
                <Row className="fix_height m-0">
                    <Col className="sidebar_bg_color p-0" lg={2}>
                        <Sidebar />
                    </Col>
                    <Col className="p-0" lg={10}>
                        <Location />
                        <div className="modal fade mt-5" id="open-modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title custom_model_title">Add new Location</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="modal-body text-left">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="parent">Select Location</label>
                                                    <select name="parent" ref="parent" className="form-control" id="parent">
                                                        <option value="1">Gaibandha</option>
                                                    </select>
                                                    {/* <small className="text-danger">{this.state.location}</small> */}

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">Enter Location Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="name"
                                                        ref="name"
                                                        name="name"
                                                        placeholder="Enter location name"
                                                    />
                                                    {/* <small className="text-danger">{this.state.hospital_name}</small> */}
                                                </div>
                                                <div className="form-group pt-2">
                                                    <div className="custom-file">
                                                        <label className="custom-file-label" htmlFor="customFile">Location flag photo (Optional)</label>
                                                        <input type="file"
                                                            name="flag"
                                                            ref="flag"
                                                            className="custom-file-input"
                                                            id="customFile"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check text-left pb-3">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            name="is_active"
                                                            ref="is_active"
                                                            id="is_active"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="is_active">Active
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer text-right">
                                            <button type="button" className="btn btn-danger  btn-sm" data-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-success btn-sm">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default AddLocation;
