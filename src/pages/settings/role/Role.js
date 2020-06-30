import React, { Component } from 'react';
import PageTitle from '../../../components/common/PageTitle';
import swal from "sweetalert";
import Moment from 'react-moment';
import FeatherIcon from 'feather-icons-react';
import RoleService from '../../../services/RoleService';

const role_service = new RoleService();

class Role extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roles: []
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        var self = this;
        role_service.roleList()
            .then(function (response) {
                self.setState({
                    roles: response
                })
            })
            .catch(error => {
                console.log(`Error: ${error}`)
            })
    }

    // Delete Role
    handleDelete(e, id) {
        swal({
            title: "Are you sure?",
            text: "Role will be deleted permanently!",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                var self = this;
                var _data = null;
                role_service.DeleteRole({ id: id })
                    .then(() => {
                        _data = self.state.roles.filter(function (obj) {
                            return obj.id !== id;
                        });
                        self.setState({
                            roles: _data
                        })
                    });
            }
        });
    }

    render() {
        return (
            <>
                <PageTitle title="Add Role" sub_title="Add new user role" />
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
                                        <th>#ID</th>
                                        <th>Usrname</th>
                                        <th>User Role</th>
                                        <th>User Email</th>
                                        <th>Created Date</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.roles && this.state.roles.map((role, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{role.id}</td>
                                                <td>{role.user.username}</td>
                                                <td>{role.role}</td>
                                                <td>{role.user.email}</td>
                                                <td>
                                                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{role.created_at}</Moment>
                                                </td>
                                                <td className="text-right">
                                                    <button
                                                        title="Update the role."
                                                        data-toggle="modal" data-target="#open-modal"
                                                        onClick={() => this.UpdateLaboratorie(role)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <button
                                                        title="Delete the role."
                                                        onClick={e => this.handleDelete(e, role.id)}
                                                        className="btn btn-danger btn-sm ml-2">
                                                        <FeatherIcon icon="trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Role;
