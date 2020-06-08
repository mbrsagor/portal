import React, { Component } from 'react';
import HospitalService from '../services/HospitalService';

const _service = new HospitalService()

class MyTest extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params) {
            _service.getHospital(params.id)
                .then((disease => {
                    this.refs.hospital_name.value = disease.hospital_name;
                    this.refs.location.value = disease.location;
                }))
        }
    }

    // Create disease
    handleCreate() {
        _service.createHospital({
            'hospital_name': this.refs.hospital_name.value,
            'location': this.refs.location.value
        }).then((result => {
            alert(result);
        })).catch((error => {
            alert(error.response)
        }))
    }

    // Create disease
    handleUpdate(id) {
        _service.updateHospital({
            'id': id,
            'hospital_name': this.refs.hospital_name.value,
            'location': this.refs.location.value
        }).then((result => {
            alert(result);
        })).catch((error => {
            alert(error)
        }))
    }

    // Submit Handler
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
                <h2 className="ml-5 mt-5">Root API Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="modal-body text-left">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="title">Enter Disease Title</label>
                                <input type="text"
                                    className="form-control"
                                    id="title"
                                    ref="hospital_name"
                                    name="title"
                                    placeholder="Enter disease title"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="help_text">Enter help text</label>
                                <input type="text"
                                    className="form-control"
                                    id="help_text"
                                    ref="location"
                                    name="help_text"
                                    placeholder="Enter help text"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer text-right">
                        <button type="button" className="btn btn-danger  btn-sm" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-success btn-sm">Save</button>
                    </div>
                </form>
            </>
        );
    }
}

export default MyTest;