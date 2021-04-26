import $ from 'jquery';
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/common/Header';
import Sidebar from '../../../components/common/Sidebar';
import RoleService from '../../../services/RoleService';
import UserService from '../../../services/UserService';
import Role from './Role';

const user_service = new UserService();
const role_service = new RoleService();

class Manager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            role: '',
            users: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // Users show in dropdonw
        var self = this;
        user_service.listOfUsers()
            .then(function (response) {
                self.setState({
                    users: response
                })
                // console.log(response);
            })
            .catch(error => {
                console.log(`${error}`)
            })
    }

    // create user role handler
    handleCreate() {
        role_service.createRole({
            'user': this.refs.user.value,
            'role': this.refs.role.value
        }).then((response => {
            ToastsStore.success('successfully created the role!');
        })).catch(error => {
            ToastsStore.warning('Something went wrong while creating role.??', error);
        })
    }

    // update user role handler
    handleUpdateCreate(id) {
        role_service.createRole({
            'id': id,
            'user': this.refs.user.value,
            'role': this.refs.role.value
        }).then((response => {
            ToastsStore.success('successfully updating the role!');
        })).catch(error => {
            ToastsStore.warning('Something went wrong while updating role.??', error);
        })
    }

    // Close modal after sumited
    close_modal_box() {
        $('#open-modal').modal('hide');
    }

    // Handler submit
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdateCreate(params.id)
        } else {
            if (this.refs.user.value.lenght === 0) {
                this.setState({
                    user: 'Please select the user'
                })
            } else if (this.refs.user.value.lenght === 0) {
                this.setState({
                    role: 'Please select the role'
                })
            } else {
                this.close_modal_box();
                this.handleCreate();
            }
        }
        event.preventDefault();
        event.target.reset();
    }

    render() {
        return (
            <>
                <Header />
                <Row className="fix_height m-0">
                    <Col className="sidebar_bg_color p-0" lg={2}>
                        <Sidebar />
                    </Col>
                    <Col className="p-0" lg={10}>
                        <Role />
                    </Col>
                </Row>
                <div className="modal fade mt-5" id="open-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title custom_model_title">Add New Role</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="modal-body text-left">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="user">Select User</label>
                                            <select name="user" ref="user" id="user" className="form-control">
                                                {this.state.users && this.state.users.map((user, index) => {
                                                    return (
                                                        <option key={index} value={user.id}>{user.username}</option>
                                                    )
                                                })}
                                            </select>
                                            {/* <small className="text-danger">{this.state.user}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="role">Select Role</label>
                                            <select name="role" ref="role" id="role" className="form-control">
                                                <option value='admin'>Admin</option>
                                                <option value='hr'>HR</option>
                                                <option value='doctor'>Doctor</option>
                                                <option value='nurse'>Nurse</option>
                                                <option value='laboratories'>Laboratories</option>
                                                <option value='accountant'>Accountant</option>
                                            </select>
                                            {/* <small className="text-danger">{this.state.role}</small> */}
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
                <Footer />
            </>
        );
    }
}

export default Manager;
