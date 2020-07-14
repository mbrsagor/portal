import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import PageTitle from '../../components/common/PageTitle';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';
import DoctorService from '../../services/DoctorService';
import Roles from './options/Roles';
import Availability from './options/Availability';
import Department from './options/Department';

const doctor_service = new DoctorService();

class AddDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            specialization: '',
            address: '',
            phone_number: '',
            education: '',
            date_of_birth: '',
            visit_fee: '',
            designation: '',
            roles: '',
            department: '',
            availability: '',
            experience: '',
            gender: '',
            profile_photo: ''
        }
    }


    handleCreate() {
        doctor_service.createDoctor({
            'specialization': this.refs.specialization.value,
            'address': this.refs.address.value,
            'phone_number': this.refs.phone_number.value,
            'education': this.refs.education.value,
            'date_of_birth': this.refs.date_of_birth.value,
            'visit_fee': this.refs.visit_fee.value,
            'designation': this.refs.designation.value,
            'roles': this.refs.roles.value,
            'department': this.refs.department.value,
            'availability': this.refs.availability.value,
            'experience': this.refs.experience.value,
            'gender': this.refs.gender.value,
            'profile_photo': this.refs.profile_photo.value,
        }).then((response => {
            console.log(response);
        })).catch((error => {
            console.log(error);
        }))
    }

    handleUpdate(id) {
        doctor_service.updateDoctor({
            'id': id,
            'specialization': this.refs.specialization.value,
            'address': this.refs.address.value,
            'phone_number': this.refs.phone_number.value,
            'education': this.refs.education.value,
            'date_of_birth': this.refs.date_of_birth.value,
            'visit_fee': this.refs.visit_fee.value,
            'designation': this.refs.designation.value,
            'roles': this.refs.roles.value,
            'department': this.refs.department.value,
            'availability': this.refs.availability.value,
            'experience': this.refs.experience.value,
            'gender': this.refs.gender.value,
            'profile_photo': this.refs.profile_photo.value,
        }).then((response => {
            console.log(response);
        })).catch((error => {
            console.log(error);
        }))
    }
    
    // Form submit handler
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id)
        } else {
            this.handleCreate()
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
                        <PageTitle title="Add Doctor" sub_title="Add New Doctor" />
                        <div className="addDoctorForm p-4 m-4 bg-light">
                            <form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col lg={6}>
                                        <div className="form-group">
                                            <label htmlFor="specialization">Doctor Specialization</label>
                                            <input type="text"
                                                className="form-control"
                                                id="specialization"
                                                ref="specialization"
                                                name="specialization"
                                                placeholder="Enter doctor specialization"
                                                required
                                            />
                                            {/* <small className="text-danger">{this.state.specialization}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="visit_fee">Doctor Visit Fee</label>
                                            <input type="number"
                                                className="form-control"
                                                id="visit_fee"
                                                ref="visit_fee"
                                                name="visit_fee"
                                                placeholder="Enter doctor visit fee"
                                                required
                                            />
                                            {/* <small className="text-danger">{this.state.visit_fee}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="designation">Doctor Designation</label>
                                            <input type="text"
                                                className="form-control"
                                                id="designation"
                                                ref="designation"
                                                name="designation"
                                                placeholder="Enter doctor designation"
                                                required
                                            />
                                            {/* <small className="text-danger">{this.state.designation}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="roles">Select Roles</label>
                                            <select
                                                className="form-control"
                                                required
                                                id="address"
                                                ref="address"
                                                name="address">
                                                <Roles/>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="experience">Doctor Experience</label>
                                            <input type="text"
                                                className="form-control"
                                                id="experience"
                                                ref="experience"
                                                name="experience"
                                                placeholder="Enter work experience"
                                                required
                                            />
                                            {/* <small className="text-danger">{this.state.experience}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="gender">Select Gender</label>
                                            <select
                                                required
                                                className="form-control"
                                                id="gender"
                                                ref="gender"
                                                name="gender">
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="form-group">
                                            <label htmlFor="address">Doctor Address</label>
                                            <input type="text"
                                                className="form-control"
                                                id="address"
                                                ref="address"
                                                name="address"
                                                placeholder="Enter doctor address"
                                                required
                                            />
                                            {/* <small className="text-danger">{this.state.address}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone_number">Phone Number</label>
                                            <input type="tel"
                                                className="form-control"
                                                id="phone_number"
                                                ref="phone_number"
                                                name="phone_number"
                                                placeholder="Enter phone number"
                                                required
                                            />
                                            {/* <small className="text-danger">{this.state.phone_number}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone_number">Date Of Birth</label>
                                            <input type="date"
                                                className="form-control"
                                                id="date_of_birth"
                                                ref="date_of_birth"
                                                name="date_of_birth"
                                                placeholder="Enter date of birth"
                                                required
                                            />
                                            {/* <small className="text-danger">{this.state.date_of_birth}</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="department">Select Department</label>
                                            <select
                                                required
                                                className="form-control"
                                                id="department"
                                                ref="department"
                                                name="department">
                                                <Department />
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="availability">Select Availability</label>
                                            <select
                                                className="form-control selectpicker"
                                                id="availability"
                                                ref="availability"
                                                name="availability">
                                                <Availability />
                                            </select>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <div className="custom-file">
                                                <label className="custom-file-label" htmlFor="profile_photo">Profile photo (Optional)</label>
                                                <input type="file"
                                                    name="profile_photo"
                                                    ref="profile_photo"
                                                    className="custom-file-input"
                                                    id="profile_photo"
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <textarea
                                    className="form-control"
                                    id="education"
                                    ref="education"
                                    name="education"
                                    placeholder="Enter all education"
                                    required
                                />
                                <button className="btn btn-success mt-3" type="submit">Save</button>
                            </form>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default AddDoctor;
