import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import DepartmentService from '../../services/DepartmentService';
import Moment from 'react-moment';
import Spinner from '../../components/common/Spinner';
import swal from "sweetalert";
// import $ from 'jquery';

const department_service = new DepartmentService();

class Hospital extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departments: [],
            requiredItem: {},

        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        var self = this;
        department_service.departmentList()
            .then(function (result) {
                self.setState({
                    departments: result
                });
            }).catch(error => {
                console.log("Error: ", error);
            });
    };

    // Open the current udpate modal
    UpdateHospital(hospital) {
        this.setState({
            requiredItems: hospital
        });

        let _json = JSON.stringify(hospital);
        alert(_json);
    }

    // Delete hospital
    handleDelete(e, id) {
        swal({
            title: "Are you sure?",
            text: "Hospital will be deleted permanently!",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true
        })
            .then(willDelete => {
                if (willDelete) {
                    var self = this;
                    var _data = null;
                    department_service.deleteDepartment({ id: id })
                        .then(() => {
                            _data = self.state.departments.filter(function (obj) {
                                return obj.id !== id;
                            });
                            self.setState({
                                departments: _data
                            })
                        });
                }
            });
    };

    render() {

        // Loader 
        if (this.state.departments.length === 0) {
            return (
                <div className="text-center">
                    <Spinner />
                </div>
            )
        }
        // /Loader

        return (
            <>
                <div className="page_title">
                    <div className="card">
                        <Row className="m-0">
                            <Col md={8}>
                                <div className="card-body">Hospital Page</div>
                            </Col>
                            <Col className="text-right" md={4}>
                                <div className="card-body">
                                    <a href="/">Dashboard</a> <FeatherIcon icon="chevrons-right" /> Hospital List
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
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
                                        <th>Department Name</th> 
                                        <th>Department Type</th> 
                                        <th>Created Date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.departments && this.state.departments.map((department, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>#{department.id}</td>
                                                <td>{department.department_name}</td>
                                                <td>{department.employee_type}</td>
                                                <td>
                                                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{department.created_at}</Moment>
                                                </td>
                                                <td className="text-right">
                                                    <button
                                                        title="Update the department."
                                                        data-toggle="modal" data-target="#open-modal"
                                                        onClick={() => this.UpdateHospital(department)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <button
                                                        title="Delete the hospital."
                                                        onClick={e => this.handleDelete(e, department.id)}
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
                        <div className="text-normal">
                            <ul className="pagination mb-0">
                                <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="/">1</a></li>
                                <li className="page-item"><a className="page-link" href="/">2</a></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item"><a className="page-link" href="/">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Hospital;
