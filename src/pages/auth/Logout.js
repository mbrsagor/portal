import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import AuthService from '../../services/AuthService';

const auth_service = new AuthService()

class Logout extends Component {

    logoutHandler(e) {
        e.preventDefault();
        auth_service.logout().then(
            (response) => {
                // const token = response.key;
                // const expirationDate = new Date(new Date().getTime() / 1000);
                localStorage.removeItem('token');
                localStorage.removeItem('expirationDate');
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('expirationDate');
                this.props.history.push('/');
            }).catch((error => {
                console.log(error);
            }))
    }

    render() {
        return (
            <button onClick={this.logoutHandler} className="logout_btn">Logout <FeatherIcon icon="lock" /></button>
        )
    }
}
 
export default Logout;
