import React, { Component } from 'react';
import DiseaseService from '../../../services/DiseaseService';

const disease_service = new DiseaseService();

class AddDisease extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { match: { _params } } = this.props;
        if (_params) {
            disease_service.getDiseaseById(_params.id)
                .then((disease) => {
                    this.refs.disease_name.value = disease.disease_name;
                    this.refs.disease_image.value = disease.disease_image;
                })
        };
    };

    // Create diseage handeler
    handelerCreate() {
        disease_service.createDisease({
            'disease_name': this.refs.disease_name.value,
            'disease_image': this.refs.disease_image.value,
        }).then((result => {
            alert('Disages has been created.')
        })).catch(() => {
            alert('Something went wrong while creating the disages.');
        })
    }

    // Update diseage handeler
    handleUpdate(id) {
        disease_service.updateDisease({
            'id': id,
            'disease_name': this.refs.disease_name.value,
            'disease_image': this.refs.disease_image.value,
        }).then((result) => {
            alert('Disages has been updated.')
        }).catch(() => {
            alert('Something went wrong while updated the disages.');
        })
    }

    // Handeler submit
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id);
        } else {
            this.handelerCreate();
        }
        event.preventDefault();
    }


    render() {
        return (
            <>
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
                </div>
            </>
        );
    }
}

export default AddDisease;
