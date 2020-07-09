import React, { Component } from 'react';
import PageTitle from '../../components/common/PageTitle';
import FeatherIcon from 'feather-icons-react';
import Spinner from '../../components/common/Spinner';
import AvailabilityService from '../../services/AvailabilityService';
import Moment from 'react-moment';
import swal from "sweetalert";

const availability_service = new AvailabilityService();

class Availability extends Component {

    constructor(props) {
        super(props);
        this.state = {
            availabilitys: ''
        }
    }

    componentDidMount() {
        var self = this;
        availability_service.getAvailability()
            .then(function (response) {
                self.setState({
                    availabilitys: response
                })
            }).catch(error => {
                console.log(error);
            })
    }

    handleDelete(e, id) {
        swal({
            title: "Are you sure?",
            text: "will be delete the availability permanently!",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true
        })
        .then(willDelete => {
            if (willDelete) {
                var self = this;
                var _data = null;
                availability_service.deleteAvailability({ id: id })
                .then(() => {
                    _data = self.state.availabilitys.filter(function (obj) {
                        return obj.id !== id;
                    });
                    self.setState({
                        availabilitys: _data
                    })
                });
            }
        })
    }

    render() {

        // Loader 
        if (this.state.availabilitys.length === 0) {
            return (
                <div className="text-center">
                    <Spinner />
                </div>
            )
        }
        // /Loader


        return (
            <>
                <PageTitle title="Employee Availability" sub_title="Employee Availability" />
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
                                        <th>Availability Day</th>
                                        <th>Availability Time</th>
                                        <th>Availability Date</th>
                                        <th>Created Date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.availabilitys && this.state.availabilitys.map((availability, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>#{availability.id}</td>
                                                <td>{availability.day}</td>
                                                <td>{availability.start_time}</td>
                                                <td>{availability.end_time}</td>
                                                <td>
                                                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{availability.created_at}</Moment>
                                                </td>
                                                <td className="text-right">
                                                    <button
                                                        title="Update the availability."
                                                        data-toggle="modal" data-target="#open-modal"
                                                        onClick={() => this.UpdateAvailability(availability)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <button
                                                        title="Delete the availability."
                                                        onClick={e => this.handleDelete(e, availability.id)}
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

export default Availability;
