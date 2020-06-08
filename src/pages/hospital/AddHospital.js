import React, { Component } from 'react';
import HospitalService from '../../services/HospitalService';
import Hospital from './Hospital';
import { ToastsContainer, ToastsStore } from 'react-toasts';

const hospital_service = new HospitalService()

class AddHospital extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params) {
            hospital_service.getHospital(params.id)
                .then((hospital => {
                    this.refs.hospital_name.value = hospital.hospital_name;
                    this.refs.location.value = hospital.location;
                }))
        }
    }

    // create hospital handler
    handleCreate() {
        hospital_service.createHospital({
            'hospital_name': this.refs.hospital_name.value,
            'location': this.refs.location.value,
        }).then((result => {
            ToastsStore.success('successfully created the hospital!');
        })).catch((error => {
            ToastsStore.warning('Something went wrong while creating hospital.', error);
        }))
    }

    // update hospital handler
    handleUpdate(id) {
        hospital_service.updateHospital({
            'id': id,
            'hospital_name': this.refs.hospital_name.value,
            'location': this.refs.location.value,
        }).then((result => {
            alert("hospital updated")
        })).catch((error => {
            alert("Error: ", error)
        }))
    }

    // Submit hander
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id);
        } else {
            this.handleCreate()
        }
        event.preventDefault();
        event.target.reset();
    }

    render() {
        return (
            <>
            
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
                                            <label htmlFor="hospital_name">Enter Hospital Name</label>
                                            <input type="text"
                                                className="form-control"
                                                id="hospital_name"
                                                ref="hospital_name"
                                                name="hospital_name"
                                                placeholder="Enter disease name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="location">Enter Hospital Location</label>
                                            <input type="text"
                                                className="form-control"
                                                id="location"
                                                ref="location"
                                                name="location"
                                                placeholder="Enter hospital location"
                                            />
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
            </>
        );
    }
}

export default AddHospital;
