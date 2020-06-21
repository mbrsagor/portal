import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Moment from 'react-moment';
import Spinner from '../../components/common/Spinner';
import swal from "sweetalert";
import ExperienceService from '../../services/ExperienceService';

const experience_serivce = new ExperienceService();

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            experiences: []
        };

        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        var self = this;
        experience_serivce.experienceList()
            .then(function (response) {
                self.setState({
                    experiences: response
                });
            }).catch(error => {
                console.log("Error, ", error);
            });
    };

    UpdateExperience(experience) {
        alert(this.experiences);
    }

    handleDelete(e, id) {
        swal({
            title: "Are you sure?",
            text: "Will you delete the experience",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                var self = this;
                var _data = null;
                experience_serivce.deleteExperience({ id: id })
                    .then(() => {
                        _data = self.state.experiences.filter(function (obj) {
                            return obj.id !== id;
                        });
                        self.setState({
                            experiences: _data
                        })
                    })

            }
        })
    }

    render() {

        // Loader 
        if (this.state.experiences.length === 0) {
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
                                <div className="card-body">Experience Page</div>
                            </Col>
                            <Col className="text-right" md={4}>
                                <div className="card-body">
                                    <a href="/dashboard">Dashboard</a> <FeatherIcon icon="chevrons-right" /> Experience List
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
                                        <th>Organization Name</th>
                                        <th>Designation</th>
                                        <th>Experience Year</th>
                                        <th>Created Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.experiences && this.state.experiences.map((experience, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>#{experience.id}</td>
                                                <td>{experience.organization_name}</td>
                                                <td>{experience.designation}</td>
                                                <td>{experience.job_year}</td>
                                                <td>
                                                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{experience.created_at}</Moment>
                                                </td>
                                                <td>
                                                    <button
                                                        title="Update the experience."
                                                        data-toggle="modal" data-target="#open-modal"
                                                        onClick={() => this.UpdateExperience(experience)}
                                                        className="btn btn-info btn-sm">
                                                        <FeatherIcon icon="edit-3" />
                                                    </button>
                                                    <button
                                                        title="Delete the Experience."
                                                        onClick={e => this.handleDelete(e, experience.id)}
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

export default Experience;
