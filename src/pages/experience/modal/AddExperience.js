import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Sidebar from '../../../components/common/Sidebar';
import $ from 'jquery';
import Experience from '../Experience';
import ExperienceService from '../../../services/ExperienceService';

const experience_service = new ExperienceService();

class AddExperience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organization_name: '',
            designation: '',
            job_year: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCreate() {
        experience_service.createExperience({
            'organization_name': this.refs.organization_name.value,
            'designation': this.refs.designation.value,
            'job_year': this.refs.job_year.value,
        }).then((resp => {
            ToastsStore.success('successfully created the experience!');
        })).catch((error => {
            ToastsStore.warning('Something went wrong while updateing the experience?', error);
        }))
    }

    // Update handler
    handleUpdate(id) {
        experience_service.updateExperience({
            'id': id,
            'organization_name': this.refs.organization_name.value,
            'designation': this.refs.designation.value,
            'job_year': this.refs.job_year.value,
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

    // Form submit handler
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id)
        } else {
            this.close_modal_box()
            this.handleCreate()
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
                        <Experience />
                        <div className="modal fade mt-5" id="open-modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title custom_model_title">Add new Experience</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="modal-body text-left">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="organization_name">Enter Organization Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="organization_name"
                                                        ref="organization_name"
                                                        name="organization_name"
                                                        placeholder="Enter organization name"
                                                    />
                                                    {/* <small className="text-danger">{this.state.hospital_name}</small> */}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="designation">Enter Designation</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="designation"
                                                        ref="designation"
                                                        name="designation"
                                                        placeholder="Enter designation"
                                                    />
                                                    {/* <small className="text-danger">{this.state.hospital_name}</small> */}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="job_year">Enter Job Year</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="job_year"
                                                        ref="job_year"
                                                        name="job_year"
                                                        placeholder="Enter job year"
                                                    />
                                                    {/* <small className="text-danger">{this.state.hospital_name}</small> */}
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
                            <ToastsContainer store={ToastsStore} />
                        </div>
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default AddExperience;
