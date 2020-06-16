import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';


class AddContagion extends Component {
    render() {
        return (
            <>
                <Header />
                <Row className="fix_height m-0">
                    <Col className="sidebar_bg_color p-0" lg={2}>
                        <Sidebar />
                    </Col>
                    <Col className="p-0" lg={10}>
                        <div className="page_title">
                            <div className="card">
                                <Row className="p-0 m-0">
                                    <Col md={8}>
                                        <div className="card-body">Contagion Create Page</div>
                                    </Col>
                                    <Col className="text-right" md={4}>
                                        <div className="card-body">
                                            <a href="/">Dashboard</a> <FeatherIcon icon="chevrons-right" /> Contagion Create
                                </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="page-container m-2 p-2">
                            <div className="bg-light p-3">
                                <form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="form-group">
                                                <label htmlFor="select_disease">Select Disease</label>
                                                <select id="select_disease" className="form-control">
                                                    <option value="1">Corona</option>
                                                    <option value="1">Corona</option>
                                                    <option value="1">Corona</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="select_location">Select Location</label>
                                                <select id="select_location" className="form-control">
                                                    <option value="1">Gaibandha</option>
                                                    <option value="1">Dhaka</option>
                                                    <option value="1">Rangpur</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="date_time">Date Time</label>
                                                <input type="date"
                                                    className="form-control"
                                                    id="date_time"
                                                    ref="date_time"
                                                    name="date_time"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="daily_test">Daily Test</label>
                                                <input type="number"
                                                    className="form-control"
                                                    id="daily_test"
                                                    ref="daily_test"
                                                    name="daily_test"
                                                    placeholder="Daily test"
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="form-group">
                                                <label htmlFor="daily_effected">Daily Effected</label>
                                                <input type="number"
                                                    className="form-control"
                                                    id="daily_effected"
                                                    ref="daily_effected"
                                                    name="daily_effected"
                                                    placeholder="Daily effected"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="daily_dies">Daily Dies</label>
                                                <input type="number"
                                                    className="form-control"
                                                    id="daily_dies"
                                                    ref="daily_dies"
                                                    name="daily_dies"
                                                    placeholder="Daily dies"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="daily_recovery">Daily Recover</label>
                                                <input type="number"
                                                    className="form-control"
                                                    id="daily_recovery"
                                                    ref="daily_recovery"
                                                    name="daily_recovery"
                                                    placeholder="Daily recover"
                                                />
                                            </div>
                                            <div className="form-group mt-5 mb-0">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="publish"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="publish">Is Publish
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success btn-sm mr-2">Save</button>
                                        <button type="reset" className="btn btn-danger btn-sm">reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default AddContagion;
