import React, { Component } from 'react';
import $ from 'jquery';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import Laboratorie from './Laboratorie';
import LaboratorieService from '../../services/LaboratorieService';

const laboratorie_service = new LaboratorieService();

class AddLaboratorie extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            lab_name: '',
            machinery_name: '',
            total_machinery: ''
        });
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // create Laboratorie handler
    handleCreate() {
        laboratorie_service.laboratorieCreate({
            'lab_name': this.refs.lab_name.value,
            'machinery_name': this.refs.machinery_name.value,
            'total_machinery': this.refs.total_machinery.value,
        }).then((response => {
            // console.log(response);
            ToastsStore.success('successfully created the Laboratorie!');
        })).catch((error => {
            // console.log(error);
            ToastsStore.warning('Something went wrong while creating Laboratorie.??', error);
        }))
    }

    // Update Laboratorie handler
    handleUpdate(id) {
        laboratorie_service.laboratorieUpdate({
            'id': id,
            'lab_name': this.refs.lab_name.value,
            'machinery_name': this.refs.machinery_name.value,
            'total_machinery': this.refs.total_machinery.value,
        }).then((response => {
            console.log(response.data);
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
        if (params.id && params) {
            this.handleUpdate(params.id)
        } else {
            if (this.refs.lab_name.value.length === 0) {
                this.setState({
                    'lab_name': 'Lab name is required'
                })
            }
            else if (this.refs.machinery_name.value.length === 0) {
                this.setState({
                    'machinery_name': 'Machinery name is required'
                })
            } else if (this.refs.total_machinery.value.length === 0) {
                this.setState({
                    'total_machinery': 'Total machinery is required'
                })
            }
            else {
                this.handleCreate();
                this.close_modal_box();
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
                        <Laboratorie />
                        <div className="modal fade mt-5" id="open-modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title custom_model_title">Add new Laboratorie</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="modal-body text-left">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="lab_name">Enter Lab Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="lab_name"
                                                        ref="lab_name"
                                                        name="lab_name"
                                                        placeholder="Enter lab name"
                                                    />
                                                    <small className="text-danger">{this.state.lab_name}</small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="employee_type">Enter Machinery Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="machinery_name"
                                                        ref="machinery_name"
                                                        name="machinery_name"
                                                        placeholder="Enter machinery name"
                                                    />
                                                    <small className="text-danger">{this.state.machinery_name}</small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="total_machinery">Total Machinery</label>
                                                    <input type="number"
                                                        className="form-control"
                                                        id="total_machinery"
                                                        ref="total_machinery"
                                                        name="total_machinery"
                                                        placeholder="Total machinery"
                                                    />
                                                    <small className="text-danger">{this.state.total_machinery}</small>
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

export default AddLaboratorie;
