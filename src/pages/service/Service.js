import React, { Component } from 'react';
import PageTitle from '../../components/common/PageTitle';
import FeatherIcon from 'feather-icons-react';
import Moment from 'react-moment';
import Spinner from '../../components/common/Spinner';
import swal from "sweetalert";

class Service extends Component {
    state = {  }
    render() { 
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
                                        <th>Discount price</th>
                                        <th>Laboratories</th>
                                        <th>Created Date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.state.departments && this.state.departments.map((department, index) => {
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
                                                        onClick={() => this.UpdateDepartment(department)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <button
                                                        title="Delete the department."
                                                        onClick={e => this.handleDelete(e, department.id)}
                                                        className="btn btn-danger btn-sm ml-2">
                                                        <FeatherIcon icon="trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    } */}
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
