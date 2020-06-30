import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Role from './Role';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Sidebar from '../../../components/common/Sidebar';

class AddRole extends Component {

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
                                                <option value="1">Sagor</option>
                                                <option value="1">Limon</option>
                                            </select>
                                            {/* <small className="text-danger">{this.state.user}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="role">Select Role</label>
                                            <select name="role" ref="role" id="role" className="form-control">
                                                <option value="1">Sagor</option>
                                                <option value="1">Limon</option>
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

export default AddRole;
