import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import Moment from 'react-moment';
import swal from "sweetalert";
import LaboratorieService from '../../services/LaboratorieService';
import PageTitle from '../../components/common/PageTitle';
import Spinner from '../../components/common/Spinner';

const laboratorie_service = new LaboratorieService();

class Laboratorie extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            lab: {},
            laboratories: []
        });
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        var self = this;
        laboratorie_service.laboratorieList()
            .then(function (response) {
                self.setState({
                    laboratories: response
                });
            }).catch(error => {
                console.log(error);
            });
    };

    UpdateLaboratorie(laboratorie) {
        this.setState({
            lab: laboratorie
        })

        let _json = JSON.stringify(laboratorie);
        alert(_json);
    }

    // Delete laboratorie
    handleDelete(e, id) {
        swal({
            title: "Are you sure?",
            text: "Laboratorie will be deleted permanently!",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true
        })
        .then(willDelete => {
            if (willDelete) {
                var self = this;
                var _data = null;
                laboratorie_service.laboratorieDelete({ id: id })
                    .then(() => {
                        _data = self.state.laboratories.filter(function (obj) {
                            return obj.id !== id
                        });
                        self.setState({
                            laboratories: _data
                        })
                    });
            }    
        })
    }

    render() {

        // Loader 
        if (this.state.laboratories.length === 0) {
            return (
                <div className="text-center">
                    <Spinner />
                </div>
            )
        }
        // /Loader

        return (
            <>
                <PageTitle title="Laboratorie" sub_title="Laboratorie list" />
                <div className="page-container m-2 p-2">
                    <div className="data_table_list">
                        <div className="text-right">
                            <button
                                data-toggle="modal"
                                data-target="#open-modal"
                                className="btn btn-info btn-sm mb-3">
                                <FeatherIcon icon="plus" />
                            </button>
                        </div>
                        <div className="shadow table_custom_class">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Lab Name</th>
                                        <th>Machinery Name</th>
                                        <th>Total Machinery</th>
                                        <th>Created Date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.laboratories && this.state.laboratories.map((laboratorie, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>#{laboratorie.id}</td>
                                                <td>{laboratorie.lab_name}</td>
                                                <td>{laboratorie.machinery_name}</td>
                                                <td>{laboratorie.total_machinery}</td>
                                                <td>
                                                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{laboratorie.created_at}</Moment>
                                                </td>
                                                <td className="text-right">
                                                    <button
                                                        title="Update the laboratorie."
                                                        data-toggle="modal" data-target="#open-modal"
                                                        onClick={() => this.UpdateLaboratorie(laboratorie)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <button
                                                        title="Delete the laboratorie."
                                                        onClick={e => this.handleDelete(e, laboratorie.id)}
                                                        className="btn btn-danger btn-sm ml-2">
                                                        <FeatherIcon icon="trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Laboratorie;
