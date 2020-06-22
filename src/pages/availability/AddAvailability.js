import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import AvailabilityService from '../../services/AvailabilityService';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import Availability from './Availability';

const availability_service = new AvailabilityService();

class AddAvailability extends Component {

    constructor(props) {
        super(props);
        this.state = {
            day: '',
            time: '',
            date: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // create handler
    handleCreate() {
        availability_service.createAvailability({
            'day': this.refs.day.value,
            'time': this.refs.time.value,
            'date': this.refs.date.value
        }).then((response => {
            console.log(response.data);
        })).catch((error) => {
            console.log("Main error is: ", error);
        })
    }

    // update handler
    handleUpdate(id) {
        availability_service.udpateAvailability({
            'id': id,
            'day': this.refs.day.value,
            'time': this.refs.time.value,
            'date': this.refs.date.value
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    // Submit handler
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id);
        } else {
            this.handleCreate();
        }
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
                        <Availability />
                        <div className="modal fade mt-5" id="open-modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title custom_model_title">Employee Availability</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="modal-body text-left">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="day">Enter Availability Day</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="day"
                                                        ref="day"
                                                        name="day"
                                                        placeholder="Enter availability Day"
                                                    />
                                                    {/* <small className="text-danger">{this.state.department_name}</small> */}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="time">Enter Availability Time</label>
                                                    <input type="time"
                                                        className="form-control"
                                                        id="time"
                                                        ref="time"
                                                        name="time"
                                                        placeholder="Enter availability time"
                                                    />
                                                    {/* <small className="text-danger">{this.state.employee_type}</small> */}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="date">Enter Availability Date</label>
                                                    <input type="date"
                                                        className="form-control"
                                                        id="date"
                                                        ref="date"
                                                        name="date"
                                                        placeholder="Enter availability date"
                                                    />
                                                    {/* <small className="text-danger">{this.state.employee_type}</small> */}
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
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default AddAvailability;
