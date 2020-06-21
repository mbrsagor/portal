import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DepartmentService from '../../services/DepartmentService'
import Hospital from './Department';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import $ from 'jquery';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';

const department_service = new DepartmentService()

class AddHospital extends Component {

    constructor(props) {
        super(props);
        this.state = {
            department_name: '',
            employee_type: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // create hospital handler
    handleCreate() {
        department_service.createDepartment({
            'department_name': this.refs.department_name.value,
            'employee_type': this.refs.employee_type.value,
        }).then((result => {
            ToastsStore.success('successfully created the hospital!');
        })).catch((error => {
            ToastsStore.warning('Something went wrong while creating hospital.??', error);
        }))
    }

    // update hospital handler
    handleUpdate(id) {
        department_service.updateDepartment({
            'id': id,
            'department_name': this.refs.department_name.value,
            'employee_type': this.refs.employee_type.value,
        }).then((result => {
            ToastsStore.success('successfully update the hospital name!');
        })).catch((error => {
            ToastsStore.warning('Something went wrong while updateing the hospital name.??', error);
        }))
    }

    // Close modal after sumited
    close_modal_box() {
        $('#open-modal').modal('hide');
    }

    // Submit hander
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id);
        } else {
            if (this.refs.department_name.value.length === 0) {
                this.setState({
                    department_name: "Fill up the hospital name",
                });
            } else if (this.refs.employee_type.value.length === 0) {
                this.setState({
                    employee_type: "Fill up the hospital location."
                })
            }
            else {
                this.close_modal_box();
                this.handleCreate();
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
                        <Hospital />
                        <div className="modal fade mt-5" id="open-modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title custom_model_title">Add new Hospital</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="modal-body text-left">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="department_name">Enter Hospital Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="department_name"
                                                        ref="department_name"
                                                        name="department_name"
                                                        placeholder="Enter hospital name"
                                                    />
                                                    <small className="text-danger">{this.state.department_name}</small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="employee_type">Enter Hospital Location</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="employee_type"
                                                        ref="employee_type"
                                                        name="employee_type"
                                                        placeholder="Enter hospital location"
                                                    />
                                                    <small className="text-danger">{this.state.employee_type}</small>
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

export default AddHospital;
