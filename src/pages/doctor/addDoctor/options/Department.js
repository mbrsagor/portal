import React, { Component } from 'react';
import DepartmentService from '../../../../services/DepartmentService';

const department_service = new DepartmentService();

class Department extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departments: ''
        }
    }

    componentDidMount() {
        var self = this;
        department_service.departmentList()
            .then(function (response) {
                self.setState({
                    departments: response
                })
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <>
                {this.state.departments && this.state.departments.map((department, index) => {
                    return (
                        <option value={department.id} key={index}>{department.department_name}</option>
                    )
                })}
            </>
        );
    }
}

export default Department;
