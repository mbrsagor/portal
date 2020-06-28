import React, { Component } from 'react';
import PageTitle from '../../components/common/PageTitle';
import FeatherIcon from 'feather-icons-react';
import Moment from 'react-moment';
import Spinner from '../../components/common/Spinner';
import HospitalService from '../../services/HospitalService';
import swal from "sweetalert";

const hospital_service = new HospitalService();

class Service extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: []
        }
    }

    componentDidMount() {
        var self = this;
        hospital_service.serviceList()
            .then(function (response) {
                self.setState({
                    services: response
                })
                // console.log(response);
            }).catch(error => {
                console.log(`Error: ${error}`)
            })
    }


    // Delete service
    handleDelete(e, id) {
        swal({
            title: "Are you sure?",
            text: "Service will be deleted permanently!",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                var self = this;
                var _data = null;
                hospital_service.deleteService({ id: id })
                    .then(() => {
                        _data = self.state.services.filter(function (obj) {
                            return obj.id !== id;
                        });
                        self.setState({
                            services: _data
                        })
                    });
            }
        });
    }


    render() {

        // Loader 
        if (this.state.services.length === 0) {
            return (
                <div className="text-center">
                    <Spinner />
                </div>
            )
        }
        // /Loader

        return (
            <>
                <PageTitle title="Service" sub_title="Service List" />
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
                                        <th>Service Name</th>
                                        <th>Price</th>
                                        <th>Discount</th>
                                        <th>Laboratories</th>
                                        <th>Created Date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.services && this.state.services.map((service, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>#{service.service_name}</td>
                                                <td>{service.price} BDT</td>
                                                <td>{service.discount_price} BDT</td>
                                                <td>{service.laboratories.lab_name}</td>
                                                <td>
                                                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{service.created_at}</Moment>
                                                </td>
                                                <td className="text-right">
                                                    <button
                                                        title="Update the service."
                                                        data-toggle="modal" data-target="#open-modal"
                                                        onClick={() => this.UpdateLaboratorie(service)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <button
                                                        title="Delete the service."
                                                        onClick={e => this.handleDelete(e, service.id)}
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

export default Service;
