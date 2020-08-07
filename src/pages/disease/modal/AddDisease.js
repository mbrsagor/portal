import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import DiseaseService from '../../../services/DiseaseService';
import Disages from '../Disease';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Sidebar from '../../../components/common/Sidebar';

const disease_service = new DiseaseService();

class AddDisease extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            disease_name: '',
            disease_image: ''
        });
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Create diseage handeler
    handelerCreate() {
        disease_service.createDisease({
            'disease_name': this.refs.disease_name.value,
            'disease_image': this.refs.disease_image.value
        }).then((response => {
            alert.log(response);
            ToastsStore.success('successfully created the Disages!');
        })).catch((error => {
            alert(error);
            ToastsStore.warning('Something went wrong while creating Disages.??', error);
        }))
    }

    // Update diseage handeler
    handleUpdate(id) {
        disease_service.updateDisease({
            'id': id,
            'disease_name': this.refs.disease_name.value,
            'disease_image': this.refs.disease_image.value,
        }).then((response) => {
            ToastsStore.success('Disages has been updated.')
        }).catch((error) => {
            ToastsStore.warning('Something went wrong while creating Disages.??', error);
        })
    }

    // Close modal after sumited
    close_modal_box() {
        $('#open-modal').modal('hide');
    }

    // Handeler submit
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id);
        } else {
            this.close_modal_box();
            this.handelerCreate();
        }
        event.preventDefault();
        event.target.reset()
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
                        <Disages />
                        <div className="modal fade mt-5" id="open-modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title custom_model_title">Add new Disease</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="modal-body text-left">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="disease_name">Enter Disease Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="disease_name"
                                                        ref="disease_name"
                                                        name="disease_name"
                                                        placeholder="Enter disease name"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-file">
                                                        <label className="custom-file-label" htmlFor="customFile">Disease photo (Optional)</label>
                                                        <input type="file"
                                                            name="disease_image"
                                                            ref="disease_image"
                                                            className="custom-file-input"
                                                            id="customFile"
                                                        />
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
                            <ToastsContainer store={ToastsStore} />
                        </div>
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default AddDisease;
