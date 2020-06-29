import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Service from './Service';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import $ from 'jquery';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import HospitalService from '../../services/HospitalService';


const hospital_services = new HospitalService();

class AddService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service_name: '',
            price: '',
            discount_price: '',
            laboratories: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // create service handler
    handleCreate() {
        hospital_services.createService({
            'service_name': this.refs.service_name.value,
            'price': this.refs.price.value,
            'discount_price': this.refs.discount_price.value,
            'laboratories': this.refs.laboratories.value,
        }).then((result => {
            console.log(result.data);
            ToastsStore.success('successfully created the service!');
        })).catch(( error => {
            ToastsStore.warning('Something went wrong while creating service.??', error);
        }))
    }

    // update service handler
    handleUpdate(id) {
        hospital_services.updateService({
            'id': id,
            'service_name': this.refs.service_name.value,
            'price': this.refs.price.value,
            'discount_price': this.refs.discount_price.value,
            'hospital_service': this.refs.hospital_service.value,
        }).then((response) => {
            console.log(response.data);
            ToastsStore.success('successfully update the service!');
        }).catch((error) => {
            ToastsStore.warning('Something went wrong while updating service.??', error);
        })
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
            if (this.refs.service_name.value.length === 0) {
                this.setState({
                    service_name: "Fill up the service name",
                });
            }else if (this.refs.price.value.length === 0) {
                this.setState({
                    price: "Fill service price."
                })
            } else if (this.refs.discount_price.value.length === 0) {
                this.setState({
                    discount_price: "Fill service discount price."
                })
            } else if (this.refs.laboratories.value.length === 0) {
                this.setState({
                    laboratories: "Select laboratorie ."
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
                        <Service />
                        <div className="modal fade mt-5" id="open-modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title custom_model_title">Add New Service</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="modal-body text-left">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="service_name">Enter Service Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="service_name"
                                                        ref="service_name"
                                                        name="service_name"
                                                        placeholder="Enter service name"
                                                    />
                                                    <small className="text-danger">{this.state.service_name}</small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="price">Service Price</label>
                                                    <input type="number"
                                                        className="form-control"
                                                        id="price"
                                                        ref="price"
                                                        name="price"
                                                        placeholder="Enter service price"
                                                    />
                                                    <small className="text-danger">{this.state.price}</small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="discount_price">Discount Price</label>
                                                    <input type="number"
                                                        className="form-control"
                                                        id="discount_price"
                                                        ref="discount_price"
                                                        name="discount_price"
                                                        placeholder="Enter discount price"
                                                    />
                                                    <small className="text-danger">{this.state.discount_price}</small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="laboratories">Select laboratories</label>
                                                    <select name="laboratories" ref="laboratories" id="laboratories" className="form-control">
                                                        <option value="1">Corona test</option>
                                                        <option value="1">MRI test</option>
                                                    </select>
                                                    <small className="text-danger">{this.state.laboratories}</small>
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

export default AddService;
