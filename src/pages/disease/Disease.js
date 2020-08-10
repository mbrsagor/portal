import React, { Component } from 'react';
import PageTitle from '../../components/common/PageTitle';
import FeatherIcon from 'feather-icons-react';
import DiseaseService from '../../services/DiseaseService';
import Moment from 'react-moment';
import swal from "sweetalert";
import Spinner from '../../components/common/Spinner';

const disease_service = new DiseaseService();

class Disease extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diseases: [],
            disease: {}
        };
    }

    componentDidMount() {
        var self = this;
        disease_service.getDisease()
            .then(function (result) {
                // console.log(result);
                self.setState({ diseases: result });
            }).catch(error => {
                console.log('Error ', error);
            });
    }

    UpdateDisease(disease) {
        this.setState({
            disease: disease
        })

        let _json = JSON.stringify(disease);
        alert(_json);
    }

    // Delete disease
    handleDelete(e, id) {
        swal({
            title: "Are you sure?",
            text: "Diseases will be deleted permanently!",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true
        })
            .then(willDelete => {
                if (willDelete) {
                    var self = this;
                    var _data = null;
                    disease_service.deleteDisease({ id: id })
                        .then(() => {
                            _data = self.state.diseases.filter(function (obj) {
                                return obj.id !== id
                            });
                            self.setState({
                                diseases: _data
                            })
                        });
                }
            })
    }

    render() {
        // Loader 
        if (this.state.diseases.length === 0) {
            return (
                <div className="text-center">
                    <Spinner />
                </div>
            )
        }
        // /Loader 

        return (
            <>
                <PageTitle title="Disease" sub_title="Disease list" />
                <div className="page-container m-2 p-2">
                    <div className="data_table_list">
                        {/* <AddDisease /> */}
                        <div className="text-right">
                            <button data-toggle="modal" data-target="#open-modal" className="btn btn-info btn-sm mb-3"><FeatherIcon icon="plus" /></button>
                        </div>
                        <div className="shadow table_custom_class">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Disease Name</th>
                                        <th>Disease Fee</th>
                                        <th>Availability</th>
                                        <th>Created Date</th>
                                        <th>Updated Date</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.diseases.map(disease => (
                                        <tr key={disease.id}>
                                            <td>#{disease.id}</td>
                                            <td>{disease.disease_name}</td>
                                            <td>{disease.disease_fee} BDT</td>
                                            <td>{disease.disease_availability ? 'Avaiable' : 'Not Avaiable'}</td>
                                            <td><Moment format='MMMM Do YYYY, h:mm:ss a'>{disease.created_at}</Moment></td>
                                            <td><Moment format='MMMM Do YYYY, h:mm:ss a'>{disease.updated_at}</Moment></td>
                                            <td className="text-right">
                                                <button
                                                    title="Update the disease."
                                                    data-toggle="modal" data-target="#open-modal"
                                                    onClick={() => this.UpdateDisease(disease)}
                                                    className="btn btn-info btn-sm">
                                                    <FeatherIcon icon="edit-3" />
                                                </button>
                                                <button
                                                    onClick={e => this.handleDelete(e, disease.id)}
                                                    className="btn btn-danger btn-sm ml-2">
                                                    <FeatherIcon icon="trash" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Disease;