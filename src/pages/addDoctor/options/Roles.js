import React, { Component } from 'react';
import RoleService from '../../../services/RoleService';

const role_service = new RoleService();

class Roles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roles : []
        }
    }

    componentDidMount() {
        var self = this;
        // User role list
        role_service.roleList()
            .then(function (response) {
                self.setState({
                    roles: response
                })
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                {this.state.roles && this.state.roles.map((role, index) => {
                    return (
                        <option value={role.id} key={index}>{role.role}</option>
                   )
               })}
            </>
        );
    }
}

export default Roles;
