import React, { Component } from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import Sidebar from '../../../components/common/Sidebar';
import Moment from 'react-moment';
import FeatherIcon from 'feather-icons-react';
import Spinner from '../../../components/common/Spinner';
import PageTitle from '../../../components/common/PageTitle';
import { Row, Col } from 'react-bootstrap';
import DoctorSerice from '../../../services/DoctorService';
import { NavLink } from 'react-router-dom';

const doctor_service = new DoctorSerice()

class DoctorList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            doctors : []
        }
    }
    
    componentDidMount() {
        var self = this;
        doctor_service.DoctorList()
            .then(function (response) {
                self.setState({
                    doctors: response.results
                })

            }).catch(error => {
                console.log(error);
            })
    }

    render() {

        // Loader 
        if (this.state.doctors.length === 0) {
            return (
                <div className="text-center">
                    <Spinner />
                </div>
            )
        }
        // /Loader

        return (
            <>
                <Header />
                <Row className="fix_height m-0">
                    <Col className="sidebar_bg_color p-0" lg={2}>
                        <Sidebar />
                    </Col>
                    <Col className="p-0" lg={10}>
                        <PageTitle title="Doctor list" sub_title="Doctor list page" />
                        <div className="shadow table_custom_class">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Doctor Name</th>
                                        <th>Designation</th>
                                        <th>Phone Number</th>
                                        <th>Visit Free</th>
                                        <th>Specialization</th>
                                        <th>Experience</th>
                                        <th>Created Date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.doctors && this.state.doctors.map((doctor, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{doctor.user.username}</td>
                                                <td>{doctor.designation}</td>
                                                <td>0{doctor.phone_number}</td>
                                                <td>{doctor.visit_fee}</td>
                                                <td>{doctor.specialization}</td>
                                                <td>{doctor.experience.job_year}</td>
                                                <td>
                                                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{doctor.created_at}</Moment>
                                                </td>
                                                <td className="text-right">
                                                    <button
                                                        title="Update the doctor information."
                                                        data-toggle="modal" data-target="#open-modal"
                                                        onClick={() => this.UpdateDoctor(doctor)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <NavLink to=""
                                                        className="btn btn-info btn-sm ml-2">
                                                        <FeatherIcon icon="link" />
                                                    </NavLink>
                                                    <button
                                                        title="Delete the Doctor."
                                                        onClick={e => this.handleDelete(e, doctor.id)}
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
                    </Col>
                </Row>
                <Footer />
            </>
        )
    }
}

export default DoctorList;
